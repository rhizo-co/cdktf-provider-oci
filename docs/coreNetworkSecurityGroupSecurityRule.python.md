# `coreNetworkSecurityGroupSecurityRule` Submodule <a name="`coreNetworkSecurityGroupSecurityRule` Submodule" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreNetworkSecurityGroupSecurityRule <a name="CoreNetworkSecurityGroupSecurityRule" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule oci_core_network_security_group_security_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  direction: str,
  network_security_group_id: str,
  protocol: str,
  description: str = None,
  destination: str = None,
  destination_type: str = None,
  icmp_options: CoreNetworkSecurityGroupSecurityRuleIcmpOptions = None,
  id: str = None,
  source: str = None,
  source_type: str = None,
  stateless: typing.Union[bool, IResolvable] = None,
  tcp_options: CoreNetworkSecurityGroupSecurityRuleTcpOptions = None,
  timeouts: CoreNetworkSecurityGroupSecurityRuleTimeouts = None,
  udp_options: CoreNetworkSecurityGroupSecurityRuleUdpOptions = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#direction CoreNetworkSecurityGroupSecurityRule#direction}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#network_security_group_id CoreNetworkSecurityGroupSecurityRule#network_security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#protocol CoreNetworkSecurityGroupSecurityRule#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#description CoreNetworkSecurityGroupSecurityRule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination CoreNetworkSecurityGroupSecurityRule#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination_type CoreNetworkSecurityGroupSecurityRule#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.icmpOptions">icmp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#id CoreNetworkSecurityGroupSecurityRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source CoreNetworkSecurityGroupSecurityRule#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source_type CoreNetworkSecurityGroupSecurityRule#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.stateless">stateless</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#stateless CoreNetworkSecurityGroupSecurityRule#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.tcpOptions">tcp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.udpOptions">udp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a></code> | udp_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `direction`<sup>Required</sup> <a name="direction" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.direction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#direction CoreNetworkSecurityGroupSecurityRule#direction}.

---

##### `network_security_group_id`<sup>Required</sup> <a name="network_security_group_id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.networkSecurityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#network_security_group_id CoreNetworkSecurityGroupSecurityRule#network_security_group_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#protocol CoreNetworkSecurityGroupSecurityRule#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#description CoreNetworkSecurityGroupSecurityRule#description}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination CoreNetworkSecurityGroupSecurityRule#destination}.

---

##### `destination_type`<sup>Optional</sup> <a name="destination_type" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.destinationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination_type CoreNetworkSecurityGroupSecurityRule#destination_type}.

---

##### `icmp_options`<sup>Optional</sup> <a name="icmp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.icmpOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#icmp_options CoreNetworkSecurityGroupSecurityRule#icmp_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#id CoreNetworkSecurityGroupSecurityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source CoreNetworkSecurityGroupSecurityRule#source}.

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source_type CoreNetworkSecurityGroupSecurityRule#source_type}.

---

##### `stateless`<sup>Optional</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.stateless"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#stateless CoreNetworkSecurityGroupSecurityRule#stateless}.

---

##### `tcp_options`<sup>Optional</sup> <a name="tcp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.tcpOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#tcp_options CoreNetworkSecurityGroupSecurityRule#tcp_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#timeouts CoreNetworkSecurityGroupSecurityRule#timeouts}

---

##### `udp_options`<sup>Optional</sup> <a name="udp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.udpOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#udp_options CoreNetworkSecurityGroupSecurityRule#udp_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putIcmpOptions">put_icmp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTcpOptions">put_tcp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putUdpOptions">put_udp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetDestinationType">reset_destination_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetIcmpOptions">reset_icmp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetSourceType">reset_source_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetStateless">reset_stateless</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetTcpOptions">reset_tcp_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetUdpOptions">reset_udp_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_icmp_options` <a name="put_icmp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putIcmpOptions"></a>

```python
def put_icmp_options(
  type: typing.Union[int, float],
  code: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putIcmpOptions.parameter.type"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#type CoreNetworkSecurityGroupSecurityRule#type}.

---

###### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putIcmpOptions.parameter.code"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#code CoreNetworkSecurityGroupSecurityRule#code}.

---

##### `put_tcp_options` <a name="put_tcp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTcpOptions"></a>

```python
def put_tcp_options(
  destination_port_range: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange = None,
  source_port_range: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange = None
) -> None
```

###### `destination_port_range`<sup>Optional</sup> <a name="destination_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTcpOptions.parameter.destinationPortRange"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination_port_range CoreNetworkSecurityGroupSecurityRule#destination_port_range}

---

###### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTcpOptions.parameter.sourcePortRange"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source_port_range CoreNetworkSecurityGroupSecurityRule#source_port_range}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#create CoreNetworkSecurityGroupSecurityRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#delete CoreNetworkSecurityGroupSecurityRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#update CoreNetworkSecurityGroupSecurityRule#update}.

---

##### `put_udp_options` <a name="put_udp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putUdpOptions"></a>

```python
def put_udp_options(
  destination_port_range: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange = None,
  source_port_range: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange = None
) -> None
```

###### `destination_port_range`<sup>Optional</sup> <a name="destination_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putUdpOptions.parameter.destinationPortRange"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination_port_range CoreNetworkSecurityGroupSecurityRule#destination_port_range}

---

###### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putUdpOptions.parameter.sourcePortRange"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source_port_range CoreNetworkSecurityGroupSecurityRule#source_port_range}

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination` <a name="reset_destination" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_destination_type` <a name="reset_destination_type" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetDestinationType"></a>

```python
def reset_destination_type() -> None
```

##### `reset_icmp_options` <a name="reset_icmp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetIcmpOptions"></a>

```python
def reset_icmp_options() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_source` <a name="reset_source" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_source_type` <a name="reset_source_type" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetSourceType"></a>

```python
def reset_source_type() -> None
```

##### `reset_stateless` <a name="reset_stateless" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetStateless"></a>

```python
def reset_stateless() -> None
```

##### `reset_tcp_options` <a name="reset_tcp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetTcpOptions"></a>

```python
def reset_tcp_options() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_udp_options` <a name="reset_udp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetUdpOptions"></a>

```python
def reset_udp_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreNetworkSecurityGroupSecurityRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreNetworkSecurityGroupSecurityRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreNetworkSecurityGroupSecurityRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreNetworkSecurityGroupSecurityRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreNetworkSecurityGroupSecurityRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.icmpOptions">icmp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference">CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.isValid">is_valid</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.tcpOptions">tcp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference">CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference">CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.udpOptions">udp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference">CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.icmpOptionsInput">icmp_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.networkSecurityGroupIdInput">network_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.statelessInput">stateless_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.tcpOptionsInput">tcp_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.udpOptionsInput">udp_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.stateless">stateless</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `icmp_options`<sup>Required</sup> <a name="icmp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.icmpOptions"></a>

```python
icmp_options: CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference">CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference</a>

---

##### `is_valid`<sup>Required</sup> <a name="is_valid" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.isValid"></a>

```python
is_valid: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tcp_options`<sup>Required</sup> <a name="tcp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.tcpOptions"></a>

```python
tcp_options: CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference">CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.timeouts"></a>

```python
timeouts: CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference">CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference</a>

---

##### `udp_options`<sup>Required</sup> <a name="udp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.udpOptions"></a>

```python
udp_options: CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference">CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `icmp_options_input`<sup>Optional</sup> <a name="icmp_options_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.icmpOptionsInput"></a>

```python
icmp_options_input: CoreNetworkSecurityGroupSecurityRuleIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_security_group_id_input`<sup>Optional</sup> <a name="network_security_group_id_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.networkSecurityGroupIdInput"></a>

```python
network_security_group_id_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `stateless_input`<sup>Optional</sup> <a name="stateless_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.statelessInput"></a>

```python
stateless_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tcp_options_input`<sup>Optional</sup> <a name="tcp_options_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.tcpOptionsInput"></a>

```python
tcp_options_input: CoreNetworkSecurityGroupSecurityRuleTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreNetworkSecurityGroupSecurityRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a>]

---

##### `udp_options_input`<sup>Optional</sup> <a name="udp_options_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.udpOptionsInput"></a>

```python
udp_options_input: CoreNetworkSecurityGroupSecurityRuleUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_security_group_id`<sup>Required</sup> <a name="network_security_group_id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.networkSecurityGroupId"></a>

```python
network_security_group_id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.stateless"></a>

```python
stateless: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreNetworkSecurityGroupSecurityRuleConfig <a name="CoreNetworkSecurityGroupSecurityRuleConfig" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  direction: str,
  network_security_group_id: str,
  protocol: str,
  description: str = None,
  destination: str = None,
  destination_type: str = None,
  icmp_options: CoreNetworkSecurityGroupSecurityRuleIcmpOptions = None,
  id: str = None,
  source: str = None,
  source_type: str = None,
  stateless: typing.Union[bool, IResolvable] = None,
  tcp_options: CoreNetworkSecurityGroupSecurityRuleTcpOptions = None,
  timeouts: CoreNetworkSecurityGroupSecurityRuleTimeouts = None,
  udp_options: CoreNetworkSecurityGroupSecurityRuleUdpOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#direction CoreNetworkSecurityGroupSecurityRule#direction}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#network_security_group_id CoreNetworkSecurityGroupSecurityRule#network_security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#protocol CoreNetworkSecurityGroupSecurityRule#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#description CoreNetworkSecurityGroupSecurityRule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination CoreNetworkSecurityGroupSecurityRule#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination_type CoreNetworkSecurityGroupSecurityRule#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.icmpOptions">icmp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#id CoreNetworkSecurityGroupSecurityRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source CoreNetworkSecurityGroupSecurityRule#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source_type CoreNetworkSecurityGroupSecurityRule#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.stateless">stateless</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#stateless CoreNetworkSecurityGroupSecurityRule#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.tcpOptions">tcp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.udpOptions">udp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a></code> | udp_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `direction`<sup>Required</sup> <a name="direction" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#direction CoreNetworkSecurityGroupSecurityRule#direction}.

---

##### `network_security_group_id`<sup>Required</sup> <a name="network_security_group_id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.networkSecurityGroupId"></a>

```python
network_security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#network_security_group_id CoreNetworkSecurityGroupSecurityRule#network_security_group_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#protocol CoreNetworkSecurityGroupSecurityRule#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#description CoreNetworkSecurityGroupSecurityRule#description}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination CoreNetworkSecurityGroupSecurityRule#destination}.

---

##### `destination_type`<sup>Optional</sup> <a name="destination_type" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination_type CoreNetworkSecurityGroupSecurityRule#destination_type}.

---

##### `icmp_options`<sup>Optional</sup> <a name="icmp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.icmpOptions"></a>

```python
icmp_options: CoreNetworkSecurityGroupSecurityRuleIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#icmp_options CoreNetworkSecurityGroupSecurityRule#icmp_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#id CoreNetworkSecurityGroupSecurityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source CoreNetworkSecurityGroupSecurityRule#source}.

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source_type CoreNetworkSecurityGroupSecurityRule#source_type}.

---

##### `stateless`<sup>Optional</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.stateless"></a>

```python
stateless: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#stateless CoreNetworkSecurityGroupSecurityRule#stateless}.

---

##### `tcp_options`<sup>Optional</sup> <a name="tcp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.tcpOptions"></a>

```python
tcp_options: CoreNetworkSecurityGroupSecurityRuleTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#tcp_options CoreNetworkSecurityGroupSecurityRule#tcp_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.timeouts"></a>

```python
timeouts: CoreNetworkSecurityGroupSecurityRuleTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#timeouts CoreNetworkSecurityGroupSecurityRule#timeouts}

---

##### `udp_options`<sup>Optional</sup> <a name="udp_options" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.udpOptions"></a>

```python
udp_options: CoreNetworkSecurityGroupSecurityRuleUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#udp_options CoreNetworkSecurityGroupSecurityRule#udp_options}

---

### CoreNetworkSecurityGroupSecurityRuleIcmpOptions <a name="CoreNetworkSecurityGroupSecurityRuleIcmpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions(
  type: typing.Union[int, float],
  code: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions.property.type">type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#type CoreNetworkSecurityGroupSecurityRule#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions.property.code">code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#code CoreNetworkSecurityGroupSecurityRule#code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#type CoreNetworkSecurityGroupSecurityRule#type}.

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#code CoreNetworkSecurityGroupSecurityRule#code}.

---

### CoreNetworkSecurityGroupSecurityRuleTcpOptions <a name="CoreNetworkSecurityGroupSecurityRuleTcpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions(
  destination_port_range: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange = None,
  source_port_range: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `destination_port_range`<sup>Optional</sup> <a name="destination_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions.property.destinationPortRange"></a>

```python
destination_port_range: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination_port_range CoreNetworkSecurityGroupSecurityRule#destination_port_range}

---

##### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions.property.sourcePortRange"></a>

```python
source_port_range: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source_port_range CoreNetworkSecurityGroupSecurityRule#source_port_range}

---

### CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange <a name="CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}.

---

### CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange <a name="CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}.

---

### CoreNetworkSecurityGroupSecurityRuleTimeouts <a name="CoreNetworkSecurityGroupSecurityRuleTimeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#create CoreNetworkSecurityGroupSecurityRule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#delete CoreNetworkSecurityGroupSecurityRule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#update CoreNetworkSecurityGroupSecurityRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#create CoreNetworkSecurityGroupSecurityRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#delete CoreNetworkSecurityGroupSecurityRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#update CoreNetworkSecurityGroupSecurityRule#update}.

---

### CoreNetworkSecurityGroupSecurityRuleUdpOptions <a name="CoreNetworkSecurityGroupSecurityRuleUdpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions(
  destination_port_range: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange = None,
  source_port_range: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `destination_port_range`<sup>Optional</sup> <a name="destination_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions.property.destinationPortRange"></a>

```python
destination_port_range: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination_port_range CoreNetworkSecurityGroupSecurityRule#destination_port_range}

---

##### `source_port_range`<sup>Optional</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions.property.sourcePortRange"></a>

```python
source_port_range: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source_port_range CoreNetworkSecurityGroupSecurityRule#source_port_range}

---

### CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange <a name="CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}.

---

### CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange <a name="CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.resetCode">reset_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code` <a name="reset_code" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.resetCode"></a>

```python
def reset_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.codeInput">code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.typeInput">type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.codeInput"></a>

```python
code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.typeInput"></a>

```python
type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CoreNetworkSecurityGroupSecurityRuleIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a>

---


### CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange</a>

---


### CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.putDestinationPortRange">put_destination_port_range</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.putSourcePortRange">put_source_port_range</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.resetDestinationPortRange">reset_destination_port_range</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.resetSourcePortRange">reset_source_port_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_port_range` <a name="put_destination_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.putDestinationPortRange"></a>

```python
def put_destination_port_range(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
) -> None
```

###### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.putDestinationPortRange.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}.

---

###### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.putDestinationPortRange.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}.

---

##### `put_source_port_range` <a name="put_source_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.putSourcePortRange"></a>

```python
def put_source_port_range(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
) -> None
```

###### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.putSourcePortRange.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}.

---

###### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.putSourcePortRange.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}.

---

##### `reset_destination_port_range` <a name="reset_destination_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.resetDestinationPortRange"></a>

```python
def reset_destination_port_range() -> None
```

##### `reset_source_port_range` <a name="reset_source_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.resetSourcePortRange"></a>

```python
def reset_source_port_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.destinationPortRangeInput">destination_port_range_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.sourcePortRangeInput">source_port_range_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_port_range`<sup>Required</sup> <a name="destination_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.destinationPortRange"></a>

```python
destination_port_range: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference</a>

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.sourcePortRange"></a>

```python
source_port_range: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference</a>

---

##### `destination_port_range_input`<sup>Optional</sup> <a name="destination_port_range_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.destinationPortRangeInput"></a>

```python
destination_port_range_input: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange</a>

---

##### `source_port_range_input`<sup>Optional</sup> <a name="source_port_range_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```python
source_port_range_input: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CoreNetworkSecurityGroupSecurityRuleTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a>

---


### CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange</a>

---


### CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreNetworkSecurityGroupSecurityRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a>]

---


### CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange</a>

---


### CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.putDestinationPortRange">put_destination_port_range</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.putSourcePortRange">put_source_port_range</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.resetDestinationPortRange">reset_destination_port_range</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.resetSourcePortRange">reset_source_port_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_port_range` <a name="put_destination_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.putDestinationPortRange"></a>

```python
def put_destination_port_range(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
) -> None
```

###### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.putDestinationPortRange.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}.

---

###### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.putDestinationPortRange.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}.

---

##### `put_source_port_range` <a name="put_source_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.putSourcePortRange"></a>

```python
def put_source_port_range(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
) -> None
```

###### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.putSourcePortRange.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}.

---

###### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.putSourcePortRange.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}.

---

##### `reset_destination_port_range` <a name="reset_destination_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.resetDestinationPortRange"></a>

```python
def reset_destination_port_range() -> None
```

##### `reset_source_port_range` <a name="reset_source_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.resetSourcePortRange"></a>

```python
def reset_source_port_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.destinationPortRangeInput">destination_port_range_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.sourcePortRangeInput">source_port_range_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_port_range`<sup>Required</sup> <a name="destination_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.destinationPortRange"></a>

```python
destination_port_range: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference</a>

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.sourcePortRange"></a>

```python
source_port_range: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference</a>

---

##### `destination_port_range_input`<sup>Optional</sup> <a name="destination_port_range_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.destinationPortRangeInput"></a>

```python
destination_port_range_input: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange</a>

---

##### `source_port_range_input`<sup>Optional</sup> <a name="source_port_range_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```python
source_port_range_input: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CoreNetworkSecurityGroupSecurityRuleUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a>

---


### CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_network_security_group_security_rule

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange</a>

---



