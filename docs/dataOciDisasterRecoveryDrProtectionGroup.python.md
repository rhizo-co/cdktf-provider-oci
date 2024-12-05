# `dataOciDisasterRecoveryDrProtectionGroup` Submodule <a name="`dataOciDisasterRecoveryDrProtectionGroup` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDisasterRecoveryDrProtectionGroup <a name="DataOciDisasterRecoveryDrProtectionGroup" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_group oci_disaster_recovery_dr_protection_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dr_protection_group_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.drProtectionGroupId">dr_protection_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_group#dr_protection_group_id DataOciDisasterRecoveryDrProtectionGroup#dr_protection_group_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dr_protection_group_id`<sup>Required</sup> <a name="dr_protection_group_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.drProtectionGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_group#dr_protection_group_id DataOciDisasterRecoveryDrProtectionGroup#dr_protection_group_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDisasterRecoveryDrProtectionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDisasterRecoveryDrProtectionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDisasterRecoveryDrProtectionGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDisasterRecoveryDrProtectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDisasterRecoveryDrProtectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.association">association</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList">DataOciDisasterRecoveryDrProtectionGroupAssociationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.disassociateTrigger">disassociate_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.lifeCycleDetails">life_cycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.lifecycleSubState">lifecycle_sub_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.logLocation">log_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList">DataOciDisasterRecoveryDrProtectionGroupLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.members">members</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList">DataOciDisasterRecoveryDrProtectionGroupMembersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.peerId">peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.peerRegion">peer_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.drProtectionGroupIdInput">dr_protection_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.drProtectionGroupId">dr_protection_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `association`<sup>Required</sup> <a name="association" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.association"></a>

```python
association: DataOciDisasterRecoveryDrProtectionGroupAssociationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList">DataOciDisasterRecoveryDrProtectionGroupAssociationList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `disassociate_trigger`<sup>Required</sup> <a name="disassociate_trigger" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.disassociateTrigger"></a>

```python
disassociate_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `life_cycle_details`<sup>Required</sup> <a name="life_cycle_details" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.lifeCycleDetails"></a>

```python
life_cycle_details: str
```

- *Type:* str

---

##### `lifecycle_sub_state`<sup>Required</sup> <a name="lifecycle_sub_state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.lifecycleSubState"></a>

```python
lifecycle_sub_state: str
```

- *Type:* str

---

##### `log_location`<sup>Required</sup> <a name="log_location" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.logLocation"></a>

```python
log_location: DataOciDisasterRecoveryDrProtectionGroupLogLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList">DataOciDisasterRecoveryDrProtectionGroupLogLocationList</a>

---

##### `members`<sup>Required</sup> <a name="members" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.members"></a>

```python
members: DataOciDisasterRecoveryDrProtectionGroupMembersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList">DataOciDisasterRecoveryDrProtectionGroupMembersList</a>

---

##### `peer_id`<sup>Required</sup> <a name="peer_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.peerId"></a>

```python
peer_id: str
```

- *Type:* str

---

##### `peer_region`<sup>Required</sup> <a name="peer_region" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.peerRegion"></a>

```python
peer_region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `dr_protection_group_id_input`<sup>Optional</sup> <a name="dr_protection_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.drProtectionGroupIdInput"></a>

```python
dr_protection_group_id_input: str
```

- *Type:* str

---

##### `dr_protection_group_id`<sup>Required</sup> <a name="dr_protection_group_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.drProtectionGroupId"></a>

```python
dr_protection_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDisasterRecoveryDrProtectionGroupAssociation <a name="DataOciDisasterRecoveryDrProtectionGroupAssociation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociation()
```


### DataOciDisasterRecoveryDrProtectionGroupConfig <a name="DataOciDisasterRecoveryDrProtectionGroupConfig" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dr_protection_group_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.drProtectionGroupId">dr_protection_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_group#dr_protection_group_id DataOciDisasterRecoveryDrProtectionGroup#dr_protection_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dr_protection_group_id`<sup>Required</sup> <a name="dr_protection_group_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.drProtectionGroupId"></a>

```python
dr_protection_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_group#dr_protection_group_id DataOciDisasterRecoveryDrProtectionGroup#dr_protection_group_id}.

---

### DataOciDisasterRecoveryDrProtectionGroupLogLocation <a name="DataOciDisasterRecoveryDrProtectionGroupLogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocation()
```


### DataOciDisasterRecoveryDrProtectionGroupMembers <a name="DataOciDisasterRecoveryDrProtectionGroupMembers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembers()
```


### DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings()
```


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations()
```


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails()
```


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails()
```


### DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings <a name="DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings()
```


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations()
```


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails()
```


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails()
```


### DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping <a name="DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping()
```


### DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings <a name="DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDisasterRecoveryDrProtectionGroupAssociationList <a name="DataOciDisasterRecoveryDrProtectionGroupAssociationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerId">peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerRegion">peer_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociation">DataOciDisasterRecoveryDrProtectionGroupAssociation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `peer_id`<sup>Required</sup> <a name="peer_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerId"></a>

```python
peer_id: str
```

- *Type:* str

---

##### `peer_region`<sup>Required</sup> <a name="peer_region" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerRegion"></a>

```python
peer_region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrProtectionGroupAssociation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociation">DataOciDisasterRecoveryDrProtectionGroupAssociation</a>

---


### DataOciDisasterRecoveryDrProtectionGroupLogLocationList <a name="DataOciDisasterRecoveryDrProtectionGroupLogLocationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocation">DataOciDisasterRecoveryDrProtectionGroupLogLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrProtectionGroupLogLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocation">DataOciDisasterRecoveryDrProtectionGroupLogLocation</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.destinationBackendSetName">destination_backend_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovable">is_backend_set_for_non_movable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.sourceBackendSetName">source_backend_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings">DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_backend_set_name`<sup>Required</sup> <a name="destination_backend_set_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.destinationBackendSetName"></a>

```python
destination_backend_set_name: str
```

- *Type:* str

---

##### `is_backend_set_for_non_movable`<sup>Required</sup> <a name="is_backend_set_for_non_movable" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovable"></a>

```python
is_backend_set_for_non_movable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `source_backend_set_name`<sup>Required</sup> <a name="source_backend_set_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.sourceBackendSetName"></a>

```python
source_backend_set_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings">DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceId">volume_attachment_reference_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `volume_attachment_reference_instance_id`<sup>Required</sup> <a name="volume_attachment_reference_instance_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceId"></a>

```python
volume_attachment_reference_instance_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.attachmentDetails">attachment_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.blockVolumeId">block_volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.mountDetails">mount_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_details`<sup>Required</sup> <a name="attachment_details" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.attachmentDetails"></a>

```python
attachment_details: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList</a>

---

##### `block_volume_id`<sup>Required</sup> <a name="block_volume_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.blockVolumeId"></a>

```python
block_volume_id: str
```

- *Type:* str

---

##### `mount_details`<sup>Required</sup> <a name="mount_details" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.mountDetails"></a>

```python
mount_details: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.destinationMountTargetId">destination_mount_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.exportId">export_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings">DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_mount_target_id`<sup>Required</sup> <a name="destination_mount_target_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.destinationMountTargetId"></a>

```python
destination_mount_target_id: str
```

- *Type:* str

---

##### `export_id`<sup>Required</sup> <a name="export_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.exportId"></a>

```python
export_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings">DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetId">mount_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_target_id`<sup>Required</sup> <a name="mount_target_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetId"></a>

```python
mount_target_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.exportPath">export_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountDetails">mount_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountTargetId">mount_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.unmountDetails">unmount_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_path`<sup>Required</sup> <a name="export_path" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.exportPath"></a>

```python
export_path: str
```

- *Type:* str

---

##### `mount_details`<sup>Required</sup> <a name="mount_details" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountDetails"></a>

```python
mount_details: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList</a>

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `mount_target_id`<sup>Required</sup> <a name="mount_target_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountTargetId"></a>

```python
mount_target_id: str
```

- *Type:* str

---

##### `unmount_details`<sup>Required</sup> <a name="unmount_details" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.unmountDetails"></a>

```python
unmount_details: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetId">mount_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_target_id`<sup>Required</sup> <a name="mount_target_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetId"></a>

```python
mount_target_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrills">autonomous_database_standby_type_for_dr_drills</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.backendSetMappings">backend_set_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList">DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.blockVolumeOperations">block_volume_operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.connectionStringType">connection_string_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationAvailabilityDomain">destination_availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCapacityReservationId">destination_capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCompartmentId">destination_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationDedicatedVmHostId">destination_dedicated_vm_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationLoadBalancerId">destination_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationNetworkLoadBalancerId">destination_network_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.exportMappings">export_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList">DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.fileSystemOperations">file_system_operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.isMovable">is_movable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.isRetainFaultDomain">is_retain_fault_domain</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.isStartStopEnabled">is_start_stop_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberId">member_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberType">member_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.passwordVaultSecretId">password_vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMapping">vnic_mapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappings">vnic_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembers">DataOciDisasterRecoveryDrProtectionGroupMembers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous_database_standby_type_for_dr_drills`<sup>Required</sup> <a name="autonomous_database_standby_type_for_dr_drills" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrills"></a>

```python
autonomous_database_standby_type_for_dr_drills: str
```

- *Type:* str

---

##### `backend_set_mappings`<sup>Required</sup> <a name="backend_set_mappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.backendSetMappings"></a>

```python
backend_set_mappings: DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList">DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList</a>

---

##### `block_volume_operations`<sup>Required</sup> <a name="block_volume_operations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.blockVolumeOperations"></a>

```python
block_volume_operations: DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `connection_string_type`<sup>Required</sup> <a name="connection_string_type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.connectionStringType"></a>

```python
connection_string_type: str
```

- *Type:* str

---

##### `destination_availability_domain`<sup>Required</sup> <a name="destination_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationAvailabilityDomain"></a>

```python
destination_availability_domain: str
```

- *Type:* str

---

##### `destination_capacity_reservation_id`<sup>Required</sup> <a name="destination_capacity_reservation_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCapacityReservationId"></a>

```python
destination_capacity_reservation_id: str
```

- *Type:* str

---

##### `destination_compartment_id`<sup>Required</sup> <a name="destination_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCompartmentId"></a>

```python
destination_compartment_id: str
```

- *Type:* str

---

##### `destination_dedicated_vm_host_id`<sup>Required</sup> <a name="destination_dedicated_vm_host_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationDedicatedVmHostId"></a>

```python
destination_dedicated_vm_host_id: str
```

- *Type:* str

---

##### `destination_load_balancer_id`<sup>Required</sup> <a name="destination_load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationLoadBalancerId"></a>

```python
destination_load_balancer_id: str
```

- *Type:* str

---

##### `destination_network_load_balancer_id`<sup>Required</sup> <a name="destination_network_load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationNetworkLoadBalancerId"></a>

```python
destination_network_load_balancer_id: str
```

- *Type:* str

---

##### `export_mappings`<sup>Required</sup> <a name="export_mappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.exportMappings"></a>

```python
export_mappings: DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList">DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList</a>

---

##### `file_system_operations`<sup>Required</sup> <a name="file_system_operations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.fileSystemOperations"></a>

```python
file_system_operations: DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList</a>

---

##### `is_movable`<sup>Required</sup> <a name="is_movable" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.isMovable"></a>

```python
is_movable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_retain_fault_domain`<sup>Required</sup> <a name="is_retain_fault_domain" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.isRetainFaultDomain"></a>

```python
is_retain_fault_domain: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_start_stop_enabled`<sup>Required</sup> <a name="is_start_stop_enabled" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.isStartStopEnabled"></a>

```python
is_start_stop_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `member_id`<sup>Required</sup> <a name="member_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberId"></a>

```python
member_id: str
```

- *Type:* str

---

##### `member_type`<sup>Required</sup> <a name="member_type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberType"></a>

```python
member_type: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `password_vault_secret_id`<sup>Required</sup> <a name="password_vault_secret_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.passwordVaultSecretId"></a>

```python
password_vault_secret_id: str
```

- *Type:* str

---

##### `vnic_mapping`<sup>Required</sup> <a name="vnic_mapping" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMapping"></a>

```python
vnic_mapping: DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList</a>

---

##### `vnic_mappings`<sup>Required</sup> <a name="vnic_mappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappings"></a>

```python
vnic_mappings: DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrProtectionGroupMembers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembers">DataOciDisasterRecoveryDrProtectionGroupMembers</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationNsgIdList">destination_nsg_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationSubnetId">destination_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.sourceVnicId">source_vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_nsg_id_list`<sup>Required</sup> <a name="destination_nsg_id_list" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationNsgIdList"></a>

```python
destination_nsg_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_subnet_id`<sup>Required</sup> <a name="destination_subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationSubnetId"></a>

```python
destination_subnet_id: str
```

- *Type:* str

---

##### `source_vnic_id`<sup>Required</sup> <a name="source_vnic_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.sourceVnicId"></a>

```python
source_vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_protection_group

dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationNsgIdList">destination_nsg_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddress">destination_primary_private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabel">destination_primary_private_ip_hostname_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationSubnetId">destination_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.sourceVnicId">source_vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_nsg_id_list`<sup>Required</sup> <a name="destination_nsg_id_list" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationNsgIdList"></a>

```python
destination_nsg_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_primary_private_ip_address`<sup>Required</sup> <a name="destination_primary_private_ip_address" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddress"></a>

```python
destination_primary_private_ip_address: str
```

- *Type:* str

---

##### `destination_primary_private_ip_hostname_label`<sup>Required</sup> <a name="destination_primary_private_ip_hostname_label" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabel"></a>

```python
destination_primary_private_ip_hostname_label: str
```

- *Type:* str

---

##### `destination_subnet_id`<sup>Required</sup> <a name="destination_subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationSubnetId"></a>

```python
destination_subnet_id: str
```

- *Type:* str

---

##### `source_vnic_id`<sup>Required</sup> <a name="source_vnic_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.sourceVnicId"></a>

```python
source_vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings</a>

---



