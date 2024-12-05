# `dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules` Submodule <a name="`dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules oci_network_firewall_network_firewall_policy_tunnel_inspection_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_firewall_policy_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter]] = None,
  id: str = None,
  tunnel_inspection_rule_priority_order: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.tunnelInspectionRulePriorityOrder">tunnel_inspection_rule_priority_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#tunnel_inspection_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#tunnel_inspection_rule_priority_order}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.networkFirewallPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#network_firewall_policy_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#filter DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tunnel_inspection_rule_priority_order`<sup>Optional</sup> <a name="tunnel_inspection_rule_priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.Initializer.parameter.tunnelInspectionRulePriorityOrder"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#tunnel_inspection_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#tunnel_inspection_rule_priority_order}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.resetTunnelInspectionRulePriorityOrder">reset_tunnel_inspection_rule_priority_order</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tunnel_inspection_rule_priority_order` <a name="reset_tunnel_inspection_rule_priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.resetTunnelInspectionRulePriorityOrder"></a>

```python
def reset_tunnel_inspection_rule_priority_order() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.tunnelInspectionRuleSummaryCollection">tunnel_inspection_rule_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.networkFirewallPolicyIdInput">network_firewall_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.tunnelInspectionRulePriorityOrderInput">tunnel_inspection_rule_priority_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.tunnelInspectionRulePriorityOrder">tunnel_inspection_rule_priority_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.filter"></a>

```python
filter: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList</a>

---

##### `tunnel_inspection_rule_summary_collection`<sup>Required</sup> <a name="tunnel_inspection_rule_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.tunnelInspectionRuleSummaryCollection"></a>

```python
tunnel_inspection_rule_summary_collection: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_firewall_policy_id_input`<sup>Optional</sup> <a name="network_firewall_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.networkFirewallPolicyIdInput"></a>

```python
network_firewall_policy_id_input: str
```

- *Type:* str

---

##### `tunnel_inspection_rule_priority_order_input`<sup>Optional</sup> <a name="tunnel_inspection_rule_priority_order_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.tunnelInspectionRulePriorityOrderInput"></a>

```python
tunnel_inspection_rule_priority_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

##### `tunnel_inspection_rule_priority_order`<sup>Required</sup> <a name="tunnel_inspection_rule_priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.tunnelInspectionRulePriorityOrder"></a>

```python
tunnel_inspection_rule_priority_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_firewall_policy_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter]] = None,
  id: str = None,
  tunnel_inspection_rule_priority_order: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.tunnelInspectionRulePriorityOrder">tunnel_inspection_rule_priority_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#tunnel_inspection_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#tunnel_inspection_rule_priority_order}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#network_firewall_policy_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#filter DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tunnel_inspection_rule_priority_order`<sup>Optional</sup> <a name="tunnel_inspection_rule_priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesConfig.property.tunnelInspectionRulePriorityOrder"></a>

```python
tunnel_inspection_rule_priority_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#tunnel_inspection_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#tunnel_inspection_rule_priority_order}.

---

### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#name DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#values DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#regex DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#name DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#values DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rules#regex DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules#regex}.

---

### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection()
```


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems()
```


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition()
```


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition()
```


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter</a>]]

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesFilter</a>]

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.property.destinationAddress">destination_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.property.sourceAddress">source_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_address`<sup>Required</sup> <a name="destination_address" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.property.destinationAddress"></a>

```python
destination_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_address`<sup>Required</sup> <a name="source_address" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.property.sourceAddress"></a>

```python
source_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsCondition</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.condition">condition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.parentResourceId">parent_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.position">position</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.priorityOrder">priority_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.profile">profile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.condition"></a>

```python
condition: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsConditionList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

##### `parent_resource_id`<sup>Required</sup> <a name="parent_resource_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.parentResourceId"></a>

```python
parent_resource_id: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.position"></a>

```python
position: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList</a>

---

##### `priority_order`<sup>Required</sup> <a name="priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.priorityOrder"></a>

```python
priority_order: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.profile"></a>

```python
profile: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItems</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.property.afterRule">after_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.property.beforeRule">before_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_rule`<sup>Required</sup> <a name="after_rule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.property.afterRule"></a>

```python
after_rule: str
```

- *Type:* str

---

##### `before_rule`<sup>Required</sup> <a name="before_rule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.property.beforeRule"></a>

```python
before_rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPositionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsPosition</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.property.mustReturnTrafficToSource">must_return_traffic_to_source</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `must_return_traffic_to_source`<sup>Required</sup> <a name="must_return_traffic_to_source" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.property.mustReturnTrafficToSource"></a>

```python
must_return_traffic_to_source: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsProfile</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rules

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRules.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulesTunnelInspectionRuleSummaryCollection</a>

---



