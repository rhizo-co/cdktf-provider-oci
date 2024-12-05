# `coreSubnet` Submodule <a name="`coreSubnet` Submodule" id="rhizo-co-terraform-provider-oci.coreSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreSubnet <a name="CoreSubnet" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet oci_core_subnet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_subnet

coreSubnet.CoreSubnet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cidr_block: str,
  compartment_id: str,
  vcn_id: str,
  availability_domain: str = None,
  defined_tags: typing.Mapping[str] = None,
  dhcp_options_id: str = None,
  display_name: str = None,
  dns_label: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  ipv6_cidr_block: str = None,
  ipv6_cidr_blocks: typing.List[str] = None,
  prohibit_internet_ingress: typing.Union[bool, IResolvable] = None,
  prohibit_public_ip_on_vnic: typing.Union[bool, IResolvable] = None,
  route_table_id: str = None,
  security_list_ids: typing.List[str] = None,
  timeouts: CoreSubnetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#cidr_block CoreSubnet#cidr_block}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#compartment_id CoreSubnet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#vcn_id CoreSubnet#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#availability_domain CoreSubnet#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#defined_tags CoreSubnet#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.dhcpOptionsId">dhcp_options_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#dhcp_options_id CoreSubnet#dhcp_options_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#display_name CoreSubnet#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.dnsLabel">dns_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#dns_label CoreSubnet#dns_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#freeform_tags CoreSubnet#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#id CoreSubnet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#ipv6cidr_block CoreSubnet#ipv6cidr_block}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.ipv6CidrBlocks">ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#ipv6cidr_blocks CoreSubnet#ipv6cidr_blocks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.prohibitInternetIngress">prohibit_internet_ingress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#prohibit_internet_ingress CoreSubnet#prohibit_internet_ingress}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.prohibitPublicIpOnVnic">prohibit_public_ip_on_vnic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#prohibit_public_ip_on_vnic CoreSubnet#prohibit_public_ip_on_vnic}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.routeTableId">route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#route_table_id CoreSubnet#route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.securityListIds">security_list_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#security_list_ids CoreSubnet#security_list_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts">CoreSubnetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.cidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#cidr_block CoreSubnet#cidr_block}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#compartment_id CoreSubnet#compartment_id}.

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#vcn_id CoreSubnet#vcn_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#availability_domain CoreSubnet#availability_domain}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#defined_tags CoreSubnet#defined_tags}.

---

##### `dhcp_options_id`<sup>Optional</sup> <a name="dhcp_options_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.dhcpOptionsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#dhcp_options_id CoreSubnet#dhcp_options_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#display_name CoreSubnet#display_name}.

---

##### `dns_label`<sup>Optional</sup> <a name="dns_label" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.dnsLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#dns_label CoreSubnet#dns_label}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#freeform_tags CoreSubnet#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#id CoreSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.ipv6CidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#ipv6cidr_block CoreSubnet#ipv6cidr_block}.

---

##### `ipv6_cidr_blocks`<sup>Optional</sup> <a name="ipv6_cidr_blocks" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.ipv6CidrBlocks"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#ipv6cidr_blocks CoreSubnet#ipv6cidr_blocks}.

---

##### `prohibit_internet_ingress`<sup>Optional</sup> <a name="prohibit_internet_ingress" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.prohibitInternetIngress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#prohibit_internet_ingress CoreSubnet#prohibit_internet_ingress}.

---

##### `prohibit_public_ip_on_vnic`<sup>Optional</sup> <a name="prohibit_public_ip_on_vnic" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.prohibitPublicIpOnVnic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#prohibit_public_ip_on_vnic CoreSubnet#prohibit_public_ip_on_vnic}.

---

##### `route_table_id`<sup>Optional</sup> <a name="route_table_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.routeTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#route_table_id CoreSubnet#route_table_id}.

---

##### `security_list_ids`<sup>Optional</sup> <a name="security_list_ids" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.securityListIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#security_list_ids CoreSubnet#security_list_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts">CoreSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#timeouts CoreSubnet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetDhcpOptionsId">reset_dhcp_options_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetDnsLabel">reset_dns_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetIpv6CidrBlocks">reset_ipv6_cidr_blocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetProhibitInternetIngress">reset_prohibit_internet_ingress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetProhibitPublicIpOnVnic">reset_prohibit_public_ip_on_vnic</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetRouteTableId">reset_route_table_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetSecurityListIds">reset_security_list_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#create CoreSubnet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#delete CoreSubnet#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#update CoreSubnet#update}.

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_dhcp_options_id` <a name="reset_dhcp_options_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetDhcpOptionsId"></a>

```python
def reset_dhcp_options_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_dns_label` <a name="reset_dns_label" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetDnsLabel"></a>

```python
def reset_dns_label() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_ipv6_cidr_blocks` <a name="reset_ipv6_cidr_blocks" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetIpv6CidrBlocks"></a>

```python
def reset_ipv6_cidr_blocks() -> None
```

##### `reset_prohibit_internet_ingress` <a name="reset_prohibit_internet_ingress" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetProhibitInternetIngress"></a>

```python
def reset_prohibit_internet_ingress() -> None
```

##### `reset_prohibit_public_ip_on_vnic` <a name="reset_prohibit_public_ip_on_vnic" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetProhibitPublicIpOnVnic"></a>

```python
def reset_prohibit_public_ip_on_vnic() -> None
```

##### `reset_route_table_id` <a name="reset_route_table_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetRouteTableId"></a>

```python
def reset_route_table_id() -> None
```

##### `reset_security_list_ids` <a name="reset_security_list_ids" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetSecurityListIds"></a>

```python
def reset_security_list_ids() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreSubnet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_subnet

coreSubnet.CoreSubnet.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_subnet

coreSubnet.CoreSubnet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_subnet

coreSubnet.CoreSubnet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_subnet

coreSubnet.CoreSubnet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreSubnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreSubnet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.ipv6VirtualRouterIp">ipv6_virtual_router_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.subnetDomainName">subnet_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference">CoreSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.virtualRouterIp">virtual_router_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.virtualRouterMac">virtual_router_mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.dhcpOptionsIdInput">dhcp_options_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.dnsLabelInput">dns_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.ipv6CidrBlocksInput">ipv6_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.prohibitInternetIngressInput">prohibit_internet_ingress_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.prohibitPublicIpOnVnicInput">prohibit_public_ip_on_vnic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.routeTableIdInput">route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.securityListIdsInput">security_list_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts">CoreSubnetTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.dhcpOptionsId">dhcp_options_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.dnsLabel">dns_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.ipv6CidrBlocks">ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.prohibitInternetIngress">prohibit_internet_ingress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.prohibitPublicIpOnVnic">prohibit_public_ip_on_vnic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.routeTableId">route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.securityListIds">security_list_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipv6_virtual_router_ip`<sup>Required</sup> <a name="ipv6_virtual_router_ip" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.ipv6VirtualRouterIp"></a>

```python
ipv6_virtual_router_ip: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_domain_name`<sup>Required</sup> <a name="subnet_domain_name" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.subnetDomainName"></a>

```python
subnet_domain_name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.timeouts"></a>

```python
timeouts: CoreSubnetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference">CoreSubnetTimeoutsOutputReference</a>

---

##### `virtual_router_ip`<sup>Required</sup> <a name="virtual_router_ip" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.virtualRouterIp"></a>

```python
virtual_router_ip: str
```

- *Type:* str

---

##### `virtual_router_mac`<sup>Required</sup> <a name="virtual_router_mac" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.virtualRouterMac"></a>

```python
virtual_router_mac: str
```

- *Type:* str

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `dhcp_options_id_input`<sup>Optional</sup> <a name="dhcp_options_id_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.dhcpOptionsIdInput"></a>

```python
dhcp_options_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dns_label_input`<sup>Optional</sup> <a name="dns_label_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.dnsLabelInput"></a>

```python
dns_label_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `ipv6_cidr_blocks_input`<sup>Optional</sup> <a name="ipv6_cidr_blocks_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.ipv6CidrBlocksInput"></a>

```python
ipv6_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prohibit_internet_ingress_input`<sup>Optional</sup> <a name="prohibit_internet_ingress_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.prohibitInternetIngressInput"></a>

```python
prohibit_internet_ingress_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prohibit_public_ip_on_vnic_input`<sup>Optional</sup> <a name="prohibit_public_ip_on_vnic_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.prohibitPublicIpOnVnicInput"></a>

```python
prohibit_public_ip_on_vnic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `route_table_id_input`<sup>Optional</sup> <a name="route_table_id_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.routeTableIdInput"></a>

```python
route_table_id_input: str
```

- *Type:* str

---

##### `security_list_ids_input`<sup>Optional</sup> <a name="security_list_ids_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.securityListIdsInput"></a>

```python
security_list_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreSubnetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts">CoreSubnetTimeouts</a>]

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `dhcp_options_id`<sup>Required</sup> <a name="dhcp_options_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.dhcpOptionsId"></a>

```python
dhcp_options_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns_label`<sup>Required</sup> <a name="dns_label" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.dnsLabel"></a>

```python
dns_label: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `ipv6_cidr_blocks`<sup>Required</sup> <a name="ipv6_cidr_blocks" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.ipv6CidrBlocks"></a>

```python
ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prohibit_internet_ingress`<sup>Required</sup> <a name="prohibit_internet_ingress" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.prohibitInternetIngress"></a>

```python
prohibit_internet_ingress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prohibit_public_ip_on_vnic`<sup>Required</sup> <a name="prohibit_public_ip_on_vnic" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.prohibitPublicIpOnVnic"></a>

```python
prohibit_public_ip_on_vnic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

---

##### `security_list_ids`<sup>Required</sup> <a name="security_list_ids" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.securityListIds"></a>

```python
security_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreSubnetConfig <a name="CoreSubnetConfig" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_subnet

coreSubnet.CoreSubnetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cidr_block: str,
  compartment_id: str,
  vcn_id: str,
  availability_domain: str = None,
  defined_tags: typing.Mapping[str] = None,
  dhcp_options_id: str = None,
  display_name: str = None,
  dns_label: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  ipv6_cidr_block: str = None,
  ipv6_cidr_blocks: typing.List[str] = None,
  prohibit_internet_ingress: typing.Union[bool, IResolvable] = None,
  prohibit_public_ip_on_vnic: typing.Union[bool, IResolvable] = None,
  route_table_id: str = None,
  security_list_ids: typing.List[str] = None,
  timeouts: CoreSubnetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#cidr_block CoreSubnet#cidr_block}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#compartment_id CoreSubnet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#vcn_id CoreSubnet#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#availability_domain CoreSubnet#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#defined_tags CoreSubnet#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.dhcpOptionsId">dhcp_options_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#dhcp_options_id CoreSubnet#dhcp_options_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#display_name CoreSubnet#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.dnsLabel">dns_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#dns_label CoreSubnet#dns_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#freeform_tags CoreSubnet#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#id CoreSubnet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#ipv6cidr_block CoreSubnet#ipv6cidr_block}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.ipv6CidrBlocks">ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#ipv6cidr_blocks CoreSubnet#ipv6cidr_blocks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.prohibitInternetIngress">prohibit_internet_ingress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#prohibit_internet_ingress CoreSubnet#prohibit_internet_ingress}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.prohibitPublicIpOnVnic">prohibit_public_ip_on_vnic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#prohibit_public_ip_on_vnic CoreSubnet#prohibit_public_ip_on_vnic}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.routeTableId">route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#route_table_id CoreSubnet#route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.securityListIds">security_list_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#security_list_ids CoreSubnet#security_list_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts">CoreSubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#cidr_block CoreSubnet#cidr_block}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#compartment_id CoreSubnet#compartment_id}.

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#vcn_id CoreSubnet#vcn_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#availability_domain CoreSubnet#availability_domain}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#defined_tags CoreSubnet#defined_tags}.

---

##### `dhcp_options_id`<sup>Optional</sup> <a name="dhcp_options_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.dhcpOptionsId"></a>

```python
dhcp_options_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#dhcp_options_id CoreSubnet#dhcp_options_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#display_name CoreSubnet#display_name}.

---

##### `dns_label`<sup>Optional</sup> <a name="dns_label" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.dnsLabel"></a>

```python
dns_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#dns_label CoreSubnet#dns_label}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#freeform_tags CoreSubnet#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#id CoreSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#ipv6cidr_block CoreSubnet#ipv6cidr_block}.

---

##### `ipv6_cidr_blocks`<sup>Optional</sup> <a name="ipv6_cidr_blocks" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.ipv6CidrBlocks"></a>

```python
ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#ipv6cidr_blocks CoreSubnet#ipv6cidr_blocks}.

---

##### `prohibit_internet_ingress`<sup>Optional</sup> <a name="prohibit_internet_ingress" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.prohibitInternetIngress"></a>

```python
prohibit_internet_ingress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#prohibit_internet_ingress CoreSubnet#prohibit_internet_ingress}.

---

##### `prohibit_public_ip_on_vnic`<sup>Optional</sup> <a name="prohibit_public_ip_on_vnic" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.prohibitPublicIpOnVnic"></a>

```python
prohibit_public_ip_on_vnic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#prohibit_public_ip_on_vnic CoreSubnet#prohibit_public_ip_on_vnic}.

---

##### `route_table_id`<sup>Optional</sup> <a name="route_table_id" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#route_table_id CoreSubnet#route_table_id}.

---

##### `security_list_ids`<sup>Optional</sup> <a name="security_list_ids" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.securityListIds"></a>

```python
security_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#security_list_ids CoreSubnet#security_list_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetConfig.property.timeouts"></a>

```python
timeouts: CoreSubnetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts">CoreSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#timeouts CoreSubnet#timeouts}

---

### CoreSubnetTimeouts <a name="CoreSubnetTimeouts" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_subnet

coreSubnet.CoreSubnetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#create CoreSubnet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#delete CoreSubnet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#update CoreSubnet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#create CoreSubnet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#delete CoreSubnet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_subnet#update CoreSubnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreSubnetTimeoutsOutputReference <a name="CoreSubnetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_subnet

coreSubnet.CoreSubnetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts">CoreSubnetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreSubnetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreSubnet.CoreSubnetTimeouts">CoreSubnetTimeouts</a>]

---



