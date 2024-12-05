# `coreVirtualNetwork` Submodule <a name="`coreVirtualNetwork` Submodule" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVirtualNetwork <a name="CoreVirtualNetwork" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network oci_core_virtual_network}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_network

coreVirtualNetwork.CoreVirtualNetwork(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  byoipv6_cidr_details: typing.Union[IResolvable, typing.List[CoreVirtualNetworkByoipv6CidrDetails]] = None,
  cidr_block: str = None,
  cidr_blocks: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  dns_label: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  ipv6_private_cidr_blocks: typing.List[str] = None,
  is_ipv6_enabled: typing.Union[bool, IResolvable] = None,
  is_oracle_gua_allocation_enabled: typing.Union[bool, IResolvable] = None,
  security_attributes: typing.Mapping[str] = None,
  timeouts: CoreVirtualNetworkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#compartment_id CoreVirtualNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.byoipv6CidrDetails">byoipv6_cidr_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>]]</code> | byoipv6cidr_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_block CoreVirtualNetwork#cidr_block}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_blocks CoreVirtualNetwork#cidr_blocks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#defined_tags CoreVirtualNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#display_name CoreVirtualNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.dnsLabel">dns_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#dns_label CoreVirtualNetwork#dns_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#freeform_tags CoreVirtualNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#id CoreVirtualNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.ipv6PrivateCidrBlocks">ipv6_private_cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6private_cidr_blocks CoreVirtualNetwork#ipv6private_cidr_blocks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.isIpv6Enabled">is_ipv6_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_ipv6enabled CoreVirtualNetwork#is_ipv6enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.isOracleGuaAllocationEnabled">is_oracle_gua_allocation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_oracle_gua_allocation_enabled CoreVirtualNetwork#is_oracle_gua_allocation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#security_attributes CoreVirtualNetwork#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#compartment_id CoreVirtualNetwork#compartment_id}.

---

##### `byoipv6_cidr_details`<sup>Optional</sup> <a name="byoipv6_cidr_details" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.byoipv6CidrDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>]]

byoipv6cidr_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#byoipv6cidr_details CoreVirtualNetwork#byoipv6cidr_details}

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.cidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_block CoreVirtualNetwork#cidr_block}.

---

##### `cidr_blocks`<sup>Optional</sup> <a name="cidr_blocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.cidrBlocks"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_blocks CoreVirtualNetwork#cidr_blocks}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#defined_tags CoreVirtualNetwork#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#display_name CoreVirtualNetwork#display_name}.

---

##### `dns_label`<sup>Optional</sup> <a name="dns_label" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.dnsLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#dns_label CoreVirtualNetwork#dns_label}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#freeform_tags CoreVirtualNetwork#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#id CoreVirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_private_cidr_blocks`<sup>Optional</sup> <a name="ipv6_private_cidr_blocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.ipv6PrivateCidrBlocks"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6private_cidr_blocks CoreVirtualNetwork#ipv6private_cidr_blocks}.

---

##### `is_ipv6_enabled`<sup>Optional</sup> <a name="is_ipv6_enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.isIpv6Enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_ipv6enabled CoreVirtualNetwork#is_ipv6enabled}.

---

##### `is_oracle_gua_allocation_enabled`<sup>Optional</sup> <a name="is_oracle_gua_allocation_enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.isOracleGuaAllocationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_oracle_gua_allocation_enabled CoreVirtualNetwork#is_oracle_gua_allocation_enabled}.

---

##### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.securityAttributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#security_attributes CoreVirtualNetwork#security_attributes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#timeouts CoreVirtualNetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putByoipv6CidrDetails">put_byoipv6_cidr_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetByoipv6CidrDetails">reset_byoipv6_cidr_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlocks">reset_cidr_blocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDnsLabel">reset_dns_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIpv6PrivateCidrBlocks">reset_ipv6_private_cidr_blocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsIpv6Enabled">reset_is_ipv6_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsOracleGuaAllocationEnabled">reset_is_oracle_gua_allocation_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetSecurityAttributes">reset_security_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_byoipv6_cidr_details` <a name="put_byoipv6_cidr_details" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putByoipv6CidrDetails"></a>

```python
def put_byoipv6_cidr_details(
  value: typing.Union[IResolvable, typing.List[CoreVirtualNetworkByoipv6CidrDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putByoipv6CidrDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#create CoreVirtualNetwork#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#delete CoreVirtualNetwork#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#update CoreVirtualNetwork#update}.

---

##### `reset_byoipv6_cidr_details` <a name="reset_byoipv6_cidr_details" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetByoipv6CidrDetails"></a>

```python
def reset_byoipv6_cidr_details() -> None
```

##### `reset_cidr_block` <a name="reset_cidr_block" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_cidr_blocks` <a name="reset_cidr_blocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlocks"></a>

```python
def reset_cidr_blocks() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_dns_label` <a name="reset_dns_label" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDnsLabel"></a>

```python
def reset_dns_label() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipv6_private_cidr_blocks` <a name="reset_ipv6_private_cidr_blocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIpv6PrivateCidrBlocks"></a>

```python
def reset_ipv6_private_cidr_blocks() -> None
```

##### `reset_is_ipv6_enabled` <a name="reset_is_ipv6_enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsIpv6Enabled"></a>

```python
def reset_is_ipv6_enabled() -> None
```

##### `reset_is_oracle_gua_allocation_enabled` <a name="reset_is_oracle_gua_allocation_enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsOracleGuaAllocationEnabled"></a>

```python
def reset_is_oracle_gua_allocation_enabled() -> None
```

##### `reset_security_attributes` <a name="reset_security_attributes" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetSecurityAttributes"></a>

```python
def reset_security_attributes() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreVirtualNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_network

coreVirtualNetwork.CoreVirtualNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_network

coreVirtualNetwork.CoreVirtualNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_network

coreVirtualNetwork.CoreVirtualNetwork.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_network

coreVirtualNetwork.CoreVirtualNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreVirtualNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreVirtualNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreVirtualNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreVirtualNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrBlocks">byoipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetails">byoipv6_cidr_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList">CoreVirtualNetworkByoipv6CidrDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultDhcpOptionsId">default_dhcp_options_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultRouteTableId">default_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultSecurityListId">default_security_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6CidrBlocks">ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference">CoreVirtualNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.vcnDomainName">vcn_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetailsInput">byoipv6_cidr_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocksInput">cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabelInput">dns_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocksInput">ipv6_private_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6EnabledInput">is_ipv6_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabledInput">is_oracle_gua_allocation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributesInput">security_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabel">dns_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocks">ipv6_private_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6Enabled">is_ipv6_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabled">is_oracle_gua_allocation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `byoipv6_cidr_blocks`<sup>Required</sup> <a name="byoipv6_cidr_blocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrBlocks"></a>

```python
byoipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `byoipv6_cidr_details`<sup>Required</sup> <a name="byoipv6_cidr_details" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetails"></a>

```python
byoipv6_cidr_details: CoreVirtualNetworkByoipv6CidrDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList">CoreVirtualNetworkByoipv6CidrDetailsList</a>

---

##### `default_dhcp_options_id`<sup>Required</sup> <a name="default_dhcp_options_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultDhcpOptionsId"></a>

```python
default_dhcp_options_id: str
```

- *Type:* str

---

##### `default_route_table_id`<sup>Required</sup> <a name="default_route_table_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultRouteTableId"></a>

```python
default_route_table_id: str
```

- *Type:* str

---

##### `default_security_list_id`<sup>Required</sup> <a name="default_security_list_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultSecurityListId"></a>

```python
default_security_list_id: str
```

- *Type:* str

---

##### `ipv6_cidr_blocks`<sup>Required</sup> <a name="ipv6_cidr_blocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6CidrBlocks"></a>

```python
ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeouts"></a>

```python
timeouts: CoreVirtualNetworkTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference">CoreVirtualNetworkTimeoutsOutputReference</a>

---

##### `vcn_domain_name`<sup>Required</sup> <a name="vcn_domain_name" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.vcnDomainName"></a>

```python
vcn_domain_name: str
```

- *Type:* str

---

##### `byoipv6_cidr_details_input`<sup>Optional</sup> <a name="byoipv6_cidr_details_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetailsInput"></a>

```python
byoipv6_cidr_details_input: typing.Union[IResolvable, typing.List[CoreVirtualNetworkByoipv6CidrDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>]]

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `cidr_blocks_input`<sup>Optional</sup> <a name="cidr_blocks_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocksInput"></a>

```python
cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dns_label_input`<sup>Optional</sup> <a name="dns_label_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabelInput"></a>

```python
dns_label_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipv6_private_cidr_blocks_input`<sup>Optional</sup> <a name="ipv6_private_cidr_blocks_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocksInput"></a>

```python
ipv6_private_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_ipv6_enabled_input`<sup>Optional</sup> <a name="is_ipv6_enabled_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6EnabledInput"></a>

```python
is_ipv6_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_oracle_gua_allocation_enabled_input`<sup>Optional</sup> <a name="is_oracle_gua_allocation_enabled_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabledInput"></a>

```python
is_oracle_gua_allocation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_attributes_input`<sup>Optional</sup> <a name="security_attributes_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributesInput"></a>

```python
security_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreVirtualNetworkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a>]

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `cidr_blocks`<sup>Required</sup> <a name="cidr_blocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns_label`<sup>Required</sup> <a name="dns_label" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabel"></a>

```python
dns_label: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipv6_private_cidr_blocks`<sup>Required</sup> <a name="ipv6_private_cidr_blocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocks"></a>

```python
ipv6_private_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_ipv6_enabled`<sup>Required</sup> <a name="is_ipv6_enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6Enabled"></a>

```python
is_ipv6_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_oracle_gua_allocation_enabled`<sup>Required</sup> <a name="is_oracle_gua_allocation_enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabled"></a>

```python
is_oracle_gua_allocation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_attributes`<sup>Required</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVirtualNetworkByoipv6CidrDetails <a name="CoreVirtualNetworkByoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_network

coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails(
  byoipv6_range_id: str,
  ipv6_cidr_block: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.byoipv6RangeId">byoipv6_range_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#byoipv6range_id CoreVirtualNetwork#byoipv6range_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6cidr_block CoreVirtualNetwork#ipv6cidr_block}. |

---

##### `byoipv6_range_id`<sup>Required</sup> <a name="byoipv6_range_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.byoipv6RangeId"></a>

```python
byoipv6_range_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#byoipv6range_id CoreVirtualNetwork#byoipv6range_id}.

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6cidr_block CoreVirtualNetwork#ipv6cidr_block}.

---

### CoreVirtualNetworkConfig <a name="CoreVirtualNetworkConfig" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_network

coreVirtualNetwork.CoreVirtualNetworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  byoipv6_cidr_details: typing.Union[IResolvable, typing.List[CoreVirtualNetworkByoipv6CidrDetails]] = None,
  cidr_block: str = None,
  cidr_blocks: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  dns_label: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  ipv6_private_cidr_blocks: typing.List[str] = None,
  is_ipv6_enabled: typing.Union[bool, IResolvable] = None,
  is_oracle_gua_allocation_enabled: typing.Union[bool, IResolvable] = None,
  security_attributes: typing.Mapping[str] = None,
  timeouts: CoreVirtualNetworkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#compartment_id CoreVirtualNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.byoipv6CidrDetails">byoipv6_cidr_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>]]</code> | byoipv6cidr_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_block CoreVirtualNetwork#cidr_block}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_blocks CoreVirtualNetwork#cidr_blocks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#defined_tags CoreVirtualNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#display_name CoreVirtualNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dnsLabel">dns_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#dns_label CoreVirtualNetwork#dns_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#freeform_tags CoreVirtualNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#id CoreVirtualNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.ipv6PrivateCidrBlocks">ipv6_private_cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6private_cidr_blocks CoreVirtualNetwork#ipv6private_cidr_blocks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isIpv6Enabled">is_ipv6_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_ipv6enabled CoreVirtualNetwork#is_ipv6enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isOracleGuaAllocationEnabled">is_oracle_gua_allocation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_oracle_gua_allocation_enabled CoreVirtualNetwork#is_oracle_gua_allocation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#security_attributes CoreVirtualNetwork#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#compartment_id CoreVirtualNetwork#compartment_id}.

---

##### `byoipv6_cidr_details`<sup>Optional</sup> <a name="byoipv6_cidr_details" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.byoipv6CidrDetails"></a>

```python
byoipv6_cidr_details: typing.Union[IResolvable, typing.List[CoreVirtualNetworkByoipv6CidrDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>]]

byoipv6cidr_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#byoipv6cidr_details CoreVirtualNetwork#byoipv6cidr_details}

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_block CoreVirtualNetwork#cidr_block}.

---

##### `cidr_blocks`<sup>Optional</sup> <a name="cidr_blocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_blocks CoreVirtualNetwork#cidr_blocks}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#defined_tags CoreVirtualNetwork#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#display_name CoreVirtualNetwork#display_name}.

---

##### `dns_label`<sup>Optional</sup> <a name="dns_label" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dnsLabel"></a>

```python
dns_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#dns_label CoreVirtualNetwork#dns_label}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#freeform_tags CoreVirtualNetwork#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#id CoreVirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_private_cidr_blocks`<sup>Optional</sup> <a name="ipv6_private_cidr_blocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.ipv6PrivateCidrBlocks"></a>

```python
ipv6_private_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6private_cidr_blocks CoreVirtualNetwork#ipv6private_cidr_blocks}.

---

##### `is_ipv6_enabled`<sup>Optional</sup> <a name="is_ipv6_enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isIpv6Enabled"></a>

```python
is_ipv6_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_ipv6enabled CoreVirtualNetwork#is_ipv6enabled}.

---

##### `is_oracle_gua_allocation_enabled`<sup>Optional</sup> <a name="is_oracle_gua_allocation_enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isOracleGuaAllocationEnabled"></a>

```python
is_oracle_gua_allocation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_oracle_gua_allocation_enabled CoreVirtualNetwork#is_oracle_gua_allocation_enabled}.

---

##### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#security_attributes CoreVirtualNetwork#security_attributes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.timeouts"></a>

```python
timeouts: CoreVirtualNetworkTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#timeouts CoreVirtualNetwork#timeouts}

---

### CoreVirtualNetworkTimeouts <a name="CoreVirtualNetworkTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_network

coreVirtualNetwork.CoreVirtualNetworkTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#create CoreVirtualNetwork#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#delete CoreVirtualNetwork#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#update CoreVirtualNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#create CoreVirtualNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#delete CoreVirtualNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#update CoreVirtualNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVirtualNetworkByoipv6CidrDetailsList <a name="CoreVirtualNetworkByoipv6CidrDetailsList" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_network

coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreVirtualNetworkByoipv6CidrDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CoreVirtualNetworkByoipv6CidrDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>]]

---


### CoreVirtualNetworkByoipv6CidrDetailsOutputReference <a name="CoreVirtualNetworkByoipv6CidrDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_network

coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeIdInput">byoipv6_range_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeId">byoipv6_range_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `byoipv6_range_id_input`<sup>Optional</sup> <a name="byoipv6_range_id_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeIdInput"></a>

```python
byoipv6_range_id_input: str
```

- *Type:* str

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `byoipv6_range_id`<sup>Required</sup> <a name="byoipv6_range_id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeId"></a>

```python
byoipv6_range_id: str
```

- *Type:* str

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreVirtualNetworkByoipv6CidrDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails">CoreVirtualNetworkByoipv6CidrDetails</a>]

---


### CoreVirtualNetworkTimeoutsOutputReference <a name="CoreVirtualNetworkTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_virtual_network

coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreVirtualNetworkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a>]

---



