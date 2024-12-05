# `dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule` Submodule <a name="`dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule oci_network_firewall_network_firewall_policy_tunnel_inspection_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule(
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
  tunnel_inspection_rule_name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.tunnelInspectionRuleName">tunnel_inspection_rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule#tunnel_inspection_rule_name DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#tunnel_inspection_rule_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.networkFirewallPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#network_firewall_policy_id}.

---

##### `tunnel_inspection_rule_name`<sup>Required</sup> <a name="tunnel_inspection_rule_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.Initializer.parameter.tunnelInspectionRuleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule#tunnel_inspection_rule_name DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#tunnel_inspection_rule_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.condition">condition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.parentResourceId">parent_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.position">position</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.priorityOrder">priority_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.profile">profile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.networkFirewallPolicyIdInput">network_firewall_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.tunnelInspectionRuleNameInput">tunnel_inspection_rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.tunnelInspectionRuleName">tunnel_inspection_rule_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.condition"></a>

```python
condition: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_resource_id`<sup>Required</sup> <a name="parent_resource_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.parentResourceId"></a>

```python
parent_resource_id: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.position"></a>

```python
position: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList</a>

---

##### `priority_order`<sup>Required</sup> <a name="priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.priorityOrder"></a>

```python
priority_order: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.profile"></a>

```python
profile: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `network_firewall_policy_id_input`<sup>Optional</sup> <a name="network_firewall_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.networkFirewallPolicyIdInput"></a>

```python
network_firewall_policy_id_input: str
```

- *Type:* str

---

##### `tunnel_inspection_rule_name_input`<sup>Optional</sup> <a name="tunnel_inspection_rule_name_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.tunnelInspectionRuleNameInput"></a>

```python
tunnel_inspection_rule_name_input: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

##### `tunnel_inspection_rule_name`<sup>Required</sup> <a name="tunnel_inspection_rule_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.tunnelInspectionRuleName"></a>

```python
tunnel_inspection_rule_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition()
```


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_firewall_policy_id: str,
  tunnel_inspection_rule_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.tunnelInspectionRuleName">tunnel_inspection_rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule#tunnel_inspection_rule_name DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#tunnel_inspection_rule_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#network_firewall_policy_id}.

---

##### `tunnel_inspection_rule_name`<sup>Required</sup> <a name="tunnel_inspection_rule_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig.property.tunnelInspectionRuleName"></a>

```python
tunnel_inspection_rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule#tunnel_inspection_rule_name DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#tunnel_inspection_rule_name}.

---

### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition()
```


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.property.destinationAddress">destination_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.property.sourceAddress">source_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_address`<sup>Required</sup> <a name="destination_address" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.property.destinationAddress"></a>

```python
destination_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_address`<sup>Required</sup> <a name="source_address" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.property.sourceAddress"></a>

```python
source_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.property.afterRule">after_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.property.beforeRule">before_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_rule`<sup>Required</sup> <a name="after_rule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.property.afterRule"></a>

```python
after_rule: str
```

- *Type:* str

---

##### `before_rule`<sup>Required</sup> <a name="before_rule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.property.beforeRule"></a>

```python
before_rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_tunnel_inspection_rule

dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.property.mustReturnTrafficToSource">must_return_traffic_to_source</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `must_return_traffic_to_source`<sup>Required</sup> <a name="must_return_traffic_to_source" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.property.mustReturnTrafficToSource"></a>

```python
must_return_traffic_to_source: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule.DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile">DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile</a>

---



