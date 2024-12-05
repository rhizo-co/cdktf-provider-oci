# `dataOciDataSafeAlertPolicyRules` Submodule <a name="`dataOciDataSafeAlertPolicyRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAlertPolicyRules <a name="DataOciDataSafeAlertPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules oci_data_safe_alert_policy_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alert_policy_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeAlertPolicyRulesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.alertPolicyId">alert_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#alert_policy_id DataOciDataSafeAlertPolicyRules#alert_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter">DataOciDataSafeAlertPolicyRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#id DataOciDataSafeAlertPolicyRules#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alert_policy_id`<sup>Required</sup> <a name="alert_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.alertPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#alert_policy_id DataOciDataSafeAlertPolicyRules#alert_policy_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter">DataOciDataSafeAlertPolicyRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#filter DataOciDataSafeAlertPolicyRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#id DataOciDataSafeAlertPolicyRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeAlertPolicyRulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter">DataOciDataSafeAlertPolicyRulesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeAlertPolicyRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeAlertPolicyRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeAlertPolicyRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeAlertPolicyRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAlertPolicyRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.alertPolicyRuleCollection">alert_policy_rule_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList">DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList">DataOciDataSafeAlertPolicyRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.alertPolicyIdInput">alert_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter">DataOciDataSafeAlertPolicyRulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.alertPolicyId">alert_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `alert_policy_rule_collection`<sup>Required</sup> <a name="alert_policy_rule_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.alertPolicyRuleCollection"></a>

```python
alert_policy_rule_collection: DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList">DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.filter"></a>

```python
filter: DataOciDataSafeAlertPolicyRulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList">DataOciDataSafeAlertPolicyRulesFilterList</a>

---

##### `alert_policy_id_input`<sup>Optional</sup> <a name="alert_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.alertPolicyIdInput"></a>

```python
alert_policy_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeAlertPolicyRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter">DataOciDataSafeAlertPolicyRulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `alert_policy_id`<sup>Required</sup> <a name="alert_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.alertPolicyId"></a>

```python
alert_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollection <a name="DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollection()
```


### DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItems <a name="DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItems()
```


### DataOciDataSafeAlertPolicyRulesConfig <a name="DataOciDataSafeAlertPolicyRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alert_policy_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeAlertPolicyRulesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.alertPolicyId">alert_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#alert_policy_id DataOciDataSafeAlertPolicyRules#alert_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter">DataOciDataSafeAlertPolicyRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#id DataOciDataSafeAlertPolicyRules#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alert_policy_id`<sup>Required</sup> <a name="alert_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.alertPolicyId"></a>

```python
alert_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#alert_policy_id DataOciDataSafeAlertPolicyRules#alert_policy_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeAlertPolicyRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter">DataOciDataSafeAlertPolicyRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#filter DataOciDataSafeAlertPolicyRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#id DataOciDataSafeAlertPolicyRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeAlertPolicyRulesFilter <a name="DataOciDataSafeAlertPolicyRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#name DataOciDataSafeAlertPolicyRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#values DataOciDataSafeAlertPolicyRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#regex DataOciDataSafeAlertPolicyRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#name DataOciDataSafeAlertPolicyRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#values DataOciDataSafeAlertPolicyRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policy_rules#regex DataOciDataSafeAlertPolicyRules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList <a name="DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference <a name="DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.alertPolicyId">alert_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItems">DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alert_policy_id`<sup>Required</sup> <a name="alert_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.alertPolicyId"></a>

```python
alert_policy_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItems">DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItems</a>

---


### DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList <a name="DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference <a name="DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList">DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollection">DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList">DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollection">DataOciDataSafeAlertPolicyRulesAlertPolicyRuleCollection</a>

---


### DataOciDataSafeAlertPolicyRulesFilterList <a name="DataOciDataSafeAlertPolicyRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeAlertPolicyRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter">DataOciDataSafeAlertPolicyRulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeAlertPolicyRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter">DataOciDataSafeAlertPolicyRulesFilter</a>]]

---


### DataOciDataSafeAlertPolicyRulesFilterOutputReference <a name="DataOciDataSafeAlertPolicyRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_alert_policy_rules

dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter">DataOciDataSafeAlertPolicyRulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeAlertPolicyRulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicyRules.DataOciDataSafeAlertPolicyRulesFilter">DataOciDataSafeAlertPolicyRulesFilter</a>]

---



