# `dataOciOsmanagementManagedInstanceGroup` Submodule <a name="`dataOciOsmanagementManagedInstanceGroup` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementManagedInstanceGroup <a name="DataOciOsmanagementManagedInstanceGroup" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_group oci_osmanagement_managed_instance_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_group

dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_group_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_group#managed_instance_group_id DataOciOsmanagementManagedInstanceGroup#managed_instance_group_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.Initializer.parameter.managedInstanceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_group#managed_instance_group_id DataOciOsmanagementManagedInstanceGroup#managed_instance_group_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_group

dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_group

dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_group

dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_group

dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsmanagementManagedInstanceGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsmanagementManagedInstanceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementManagedInstanceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.managedInstanceCount">managed_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.managedInstanceIds">managed_instance_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.managedInstances">managed_instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList">DataOciOsmanagementManagedInstanceGroupManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.managedInstanceGroupIdInput">managed_instance_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_count`<sup>Required</sup> <a name="managed_instance_count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.managedInstanceCount"></a>

```python
managed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_instance_ids`<sup>Required</sup> <a name="managed_instance_ids" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.managedInstanceIds"></a>

```python
managed_instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.managedInstances"></a>

```python
managed_instances: DataOciOsmanagementManagedInstanceGroupManagedInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList">DataOciOsmanagementManagedInstanceGroupManagedInstancesList</a>

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `managed_instance_group_id_input`<sup>Optional</sup> <a name="managed_instance_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.managedInstanceGroupIdInput"></a>

```python
managed_instance_group_id_input: str
```

- *Type:* str

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementManagedInstanceGroupConfig <a name="DataOciOsmanagementManagedInstanceGroupConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_group

dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_group_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_group#managed_instance_group_id DataOciOsmanagementManagedInstanceGroup#managed_instance_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupConfig.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_group#managed_instance_group_id DataOciOsmanagementManagedInstanceGroup#managed_instance_group_id}.

---

### DataOciOsmanagementManagedInstanceGroupManagedInstances <a name="DataOciOsmanagementManagedInstanceGroupManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_group

dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstances()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementManagedInstanceGroupManagedInstancesList <a name="DataOciOsmanagementManagedInstanceGroupManagedInstancesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_group

dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference <a name="DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_group

dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstances">DataOciOsmanagementManagedInstanceGroupManagedInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstancesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsmanagementManagedInstanceGroupManagedInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceGroup.DataOciOsmanagementManagedInstanceGroupManagedInstances">DataOciOsmanagementManagedInstanceGroupManagedInstances</a>

---



