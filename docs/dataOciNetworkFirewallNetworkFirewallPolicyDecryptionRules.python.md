# `dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules` Submodule <a name="`dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules oci_network_firewall_network_firewall_policy_decryption_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules(
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
  decryption_rule_priority_order: typing.Union[int, float] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.decryptionRulePriorityOrder">decryption_rule_priority_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#decryption_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#decryption_rule_priority_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.networkFirewallPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#network_firewall_policy_id}.

---

##### `decryption_rule_priority_order`<sup>Optional</sup> <a name="decryption_rule_priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.decryptionRulePriorityOrder"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#decryption_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#decryption_rule_priority_order}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#filter DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetDecryptionRulePriorityOrder">reset_decryption_rule_priority_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter</a>]]

---

##### `reset_decryption_rule_priority_order` <a name="reset_decryption_rule_priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetDecryptionRulePriorityOrder"></a>

```python
def reset_decryption_rule_priority_order() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.decryptionRuleSummaryCollection">decryption_rule_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.decryptionRulePriorityOrderInput">decryption_rule_priority_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.networkFirewallPolicyIdInput">network_firewall_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.decryptionRulePriorityOrder">decryption_rule_priority_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `decryption_rule_summary_collection`<sup>Required</sup> <a name="decryption_rule_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.decryptionRuleSummaryCollection"></a>

```python
decryption_rule_summary_collection: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.filter"></a>

```python
filter: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList</a>

---

##### `decryption_rule_priority_order_input`<sup>Optional</sup> <a name="decryption_rule_priority_order_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.decryptionRulePriorityOrderInput"></a>

```python
decryption_rule_priority_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_firewall_policy_id_input`<sup>Optional</sup> <a name="network_firewall_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.networkFirewallPolicyIdInput"></a>

```python
network_firewall_policy_id_input: str
```

- *Type:* str

---

##### `decryption_rule_priority_order`<sup>Required</sup> <a name="decryption_rule_priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.decryptionRulePriorityOrder"></a>

```python
decryption_rule_priority_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_firewall_policy_id: str,
  decryption_rule_priority_order: typing.Union[int, float] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.decryptionRulePriorityOrder">decryption_rule_priority_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#decryption_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#decryption_rule_priority_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#network_firewall_policy_id}.

---

##### `decryption_rule_priority_order`<sup>Optional</sup> <a name="decryption_rule_priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.decryptionRulePriorityOrder"></a>

```python
decryption_rule_priority_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#decryption_rule_priority_order DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#decryption_rule_priority_order}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#display_name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#filter DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection()
```


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems()
```


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition()
```


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition()
```


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#values DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#regex DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#values DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_rules#regex DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.destinationAddress">destination_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.sourceAddress">source_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_address`<sup>Required</sup> <a name="destination_address" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.destinationAddress"></a>

```python
destination_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_address`<sup>Required</sup> <a name="source_address" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.sourceAddress"></a>

```python
source_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsCondition</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.condition">condition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.decryptionProfile">decryption_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.parentResourceId">parent_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.position">position</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.priorityOrder">priority_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.condition"></a>

```python
condition: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsConditionList</a>

---

##### `decryption_profile`<sup>Required</sup> <a name="decryption_profile" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.decryptionProfile"></a>

```python
decryption_profile: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

##### `parent_resource_id`<sup>Required</sup> <a name="parent_resource_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.parentResourceId"></a>

```python
parent_resource_id: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.position"></a>

```python
position: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList</a>

---

##### `priority_order`<sup>Required</sup> <a name="priority_order" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.priorityOrder"></a>

```python
priority_order: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItems</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.afterRule">after_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.beforeRule">before_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_rule`<sup>Required</sup> <a name="after_rule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.afterRule"></a>

```python
after_rule: str
```

- *Type:* str

---

##### `before_rule`<sup>Required</sup> <a name="before_rule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.beforeRule"></a>

```python
before_rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPositionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsPosition</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesDecryptionRuleSummaryCollection</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter</a>]]

---


### DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_decryption_rules

dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyDecryptionRules.DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter">DataOciNetworkFirewallNetworkFirewallPolicyDecryptionRulesFilter</a>]

---



