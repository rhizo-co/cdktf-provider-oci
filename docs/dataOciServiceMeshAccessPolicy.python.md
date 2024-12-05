# `dataOciServiceMeshAccessPolicy` Submodule <a name="`dataOciServiceMeshAccessPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshAccessPolicy <a name="DataOciServiceMeshAccessPolicy" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policy oci_service_mesh_access_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_policy_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.accessPolicyId">access_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policy#access_policy_id DataOciServiceMeshAccessPolicy#access_policy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.Initializer.parameter.accessPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policy#access_policy_id DataOciServiceMeshAccessPolicy#access_policy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciServiceMeshAccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciServiceMeshAccessPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciServiceMeshAccessPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciServiceMeshAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.meshId">mesh_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList">DataOciServiceMeshAccessPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.accessPolicyIdInput">access_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.accessPolicyId">access_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `mesh_id`<sup>Required</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.meshId"></a>

```python
mesh_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.rules"></a>

```python
rules: DataOciServiceMeshAccessPolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList">DataOciServiceMeshAccessPolicyRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `access_policy_id_input`<sup>Optional</sup> <a name="access_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.accessPolicyIdInput"></a>

```python
access_policy_id_input: str
```

- *Type:* str

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.accessPolicyId"></a>

```python
access_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshAccessPolicyConfig <a name="DataOciServiceMeshAccessPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_policy_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.accessPolicyId">access_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policy#access_policy_id DataOciServiceMeshAccessPolicy#access_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyConfig.property.accessPolicyId"></a>

```python
access_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policy#access_policy_id DataOciServiceMeshAccessPolicy#access_policy_id}.

---

### DataOciServiceMeshAccessPolicyRules <a name="DataOciServiceMeshAccessPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRules()
```


### DataOciServiceMeshAccessPolicyRulesDestination <a name="DataOciServiceMeshAccessPolicyRulesDestination" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestination"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestination.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestination()
```


### DataOciServiceMeshAccessPolicyRulesSource <a name="DataOciServiceMeshAccessPolicyRulesSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSource()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshAccessPolicyRulesDestinationList <a name="DataOciServiceMeshAccessPolicyRulesDestinationList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshAccessPolicyRulesDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshAccessPolicyRulesDestinationOutputReference <a name="DataOciServiceMeshAccessPolicyRulesDestinationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestination">DataOciServiceMeshAccessPolicyRulesDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingress_gateway_id`<sup>Required</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.ingressGatewayId"></a>

```python
ingress_gateway_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshAccessPolicyRulesDestination
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestination">DataOciServiceMeshAccessPolicyRulesDestination</a>

---


### DataOciServiceMeshAccessPolicyRulesList <a name="DataOciServiceMeshAccessPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshAccessPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshAccessPolicyRulesOutputReference <a name="DataOciServiceMeshAccessPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.property.destination">destination</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList">DataOciServiceMeshAccessPolicyRulesDestinationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList">DataOciServiceMeshAccessPolicyRulesSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRules">DataOciServiceMeshAccessPolicyRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.property.destination"></a>

```python
destination: DataOciServiceMeshAccessPolicyRulesDestinationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesDestinationList">DataOciServiceMeshAccessPolicyRulesDestinationList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.property.source"></a>

```python
source: DataOciServiceMeshAccessPolicyRulesSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList">DataOciServiceMeshAccessPolicyRulesSourceList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshAccessPolicyRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRules">DataOciServiceMeshAccessPolicyRules</a>

---


### DataOciServiceMeshAccessPolicyRulesSourceList <a name="DataOciServiceMeshAccessPolicyRulesSourceList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceMeshAccessPolicyRulesSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceMeshAccessPolicyRulesSourceOutputReference <a name="DataOciServiceMeshAccessPolicyRulesSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_mesh_access_policy

dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSource">DataOciServiceMeshAccessPolicyRulesSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingress_gateway_id`<sup>Required</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.ingressGatewayId"></a>

```python
ingress_gateway_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceMeshAccessPolicyRulesSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicy.DataOciServiceMeshAccessPolicyRulesSource">DataOciServiceMeshAccessPolicyRulesSource</a>

---



