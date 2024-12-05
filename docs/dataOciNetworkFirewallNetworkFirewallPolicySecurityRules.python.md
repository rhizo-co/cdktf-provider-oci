# `dataOciNetworkFirewallNetworkFirewallPolicySecurityRules` Submodule <a name="`dataOciNetworkFirewallNetworkFirewallPolicySecurityRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicySecurityRules <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRules" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules oci_network_firewall_network_firewall_policy_security_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules(
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
  filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter]] = None,
  id: str = None,
  security_rule_priority_order: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.securityRulePriorityOrder">security_rule_priority_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#security_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#security_rule_priority_order}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.networkFirewallPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#network_firewall_policy_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#filter DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_rule_priority_order`<sup>Optional</sup> <a name="security_rule_priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.Initializer.parameter.securityRulePriorityOrder"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#security_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#security_rule_priority_order}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetSecurityRulePriorityOrder">reset_security_rule_priority_order</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_security_rule_priority_order` <a name="reset_security_rule_priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.resetSecurityRulePriorityOrder"></a>

```python
def reset_security_rule_priority_order() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicySecurityRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicySecurityRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicySecurityRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciNetworkFirewallNetworkFirewallPolicySecurityRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicySecurityRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.securityRuleSummaryCollection">security_rule_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.networkFirewallPolicyIdInput">network_firewall_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.securityRulePriorityOrderInput">security_rule_priority_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.securityRulePriorityOrder">security_rule_priority_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.filter"></a>

```python
filter: DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList</a>

---

##### `security_rule_summary_collection`<sup>Required</sup> <a name="security_rule_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.securityRuleSummaryCollection"></a>

```python
security_rule_summary_collection: DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_firewall_policy_id_input`<sup>Optional</sup> <a name="network_firewall_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.networkFirewallPolicyIdInput"></a>

```python
network_firewall_policy_id_input: str
```

- *Type:* str

---

##### `security_rule_priority_order_input`<sup>Optional</sup> <a name="security_rule_priority_order_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.securityRulePriorityOrderInput"></a>

```python
security_rule_priority_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

##### `security_rule_priority_order`<sup>Required</sup> <a name="security_rule_priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.securityRulePriorityOrder"></a>

```python
security_rule_priority_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_firewall_policy_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter]] = None,
  id: str = None,
  security_rule_priority_order: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.securityRulePriorityOrder">security_rule_priority_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#security_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#security_rule_priority_order}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#network_firewall_policy_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#filter DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#id DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_rule_priority_order`<sup>Optional</sup> <a name="security_rule_priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesConfig.property.securityRulePriorityOrder"></a>

```python
security_rule_priority_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#security_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#security_rule_priority_order}.

---

### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#name DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#values DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#regex DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#name DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#values DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_security_rules#regex DataOciNetworkFirewallNetworkFirewallPolicySecurityRules#regex}.

---

### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection()
```


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems()
```


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition()
```


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>]]

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesFilter</a>]

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.application">application</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.destinationAddress">destination_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.service">service</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.sourceAddress">source_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.url">url</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application`<sup>Required</sup> <a name="application" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.application"></a>

```python
application: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_address`<sup>Required</sup> <a name="destination_address" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.destinationAddress"></a>

```python
destination_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.service"></a>

```python
service: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_address`<sup>Required</sup> <a name="source_address" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.sourceAddress"></a>

```python
source_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.url"></a>

```python
url: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsCondition</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.condition">condition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.inspection">inspection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.parentResourceId">parent_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.position">position</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.priorityOrder">priority_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.condition"></a>

```python
condition: DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsConditionList</a>

---

##### `inspection`<sup>Required</sup> <a name="inspection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.inspection"></a>

```python
inspection: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

##### `parent_resource_id`<sup>Required</sup> <a name="parent_resource_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.parentResourceId"></a>

```python
parent_resource_id: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.position"></a>

```python
position: DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList</a>

---

##### `priority_order`<sup>Required</sup> <a name="priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.priorityOrder"></a>

```python
priority_order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItems</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.afterRule">after_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.beforeRule">before_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_rule`<sup>Required</sup> <a name="after_rule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.afterRule"></a>

```python
after_rule: str
```

- *Type:* str

---

##### `before_rule`<sup>Required</sup> <a name="before_rule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.beforeRule"></a>

```python
before_rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPositionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsPosition</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_security_rules

dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicySecurityRules.DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicySecurityRulesSecurityRuleSummaryCollection</a>

---



