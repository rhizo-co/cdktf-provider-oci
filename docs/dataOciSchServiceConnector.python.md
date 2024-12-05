# `dataOciSchServiceConnector` Submodule <a name="`dataOciSchServiceConnector` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSchServiceConnector <a name="DataOciSchServiceConnector" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connector oci_sch_service_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnector(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_connector_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.serviceConnectorId">service_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connector#service_connector_id DataOciSchServiceConnector#service_connector_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_connector_id`<sup>Required</sup> <a name="service_connector_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.serviceConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connector#service_connector_id DataOciSchServiceConnector#service_connector_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciSchServiceConnector resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnector.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciSchServiceConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciSchServiceConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciSchServiceConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSchServiceConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.lifecyleDetails">lifecyle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList">DataOciSchServiceConnectorSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList">DataOciSchServiceConnectorTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList">DataOciSchServiceConnectorTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.serviceConnectorIdInput">service_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.serviceConnectorId">service_connector_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecyle_details`<sup>Required</sup> <a name="lifecyle_details" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.lifecyleDetails"></a>

```python
lifecyle_details: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.source"></a>

```python
source: DataOciSchServiceConnectorSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList">DataOciSchServiceConnectorSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.target"></a>

```python
target: DataOciSchServiceConnectorTargetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList">DataOciSchServiceConnectorTargetList</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.tasks"></a>

```python
tasks: DataOciSchServiceConnectorTasksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList">DataOciSchServiceConnectorTasksList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `service_connector_id_input`<sup>Optional</sup> <a name="service_connector_id_input" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.serviceConnectorIdInput"></a>

```python
service_connector_id_input: str
```

- *Type:* str

---

##### `service_connector_id`<sup>Required</sup> <a name="service_connector_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.serviceConnectorId"></a>

```python
service_connector_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSchServiceConnectorConfig <a name="DataOciSchServiceConnectorConfig" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_connector_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.serviceConnectorId">service_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connector#service_connector_id DataOciSchServiceConnector#service_connector_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_connector_id`<sup>Required</sup> <a name="service_connector_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.serviceConnectorId"></a>

```python
service_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connector#service_connector_id DataOciSchServiceConnector#service_connector_id}.

---

### DataOciSchServiceConnectorSource <a name="DataOciSchServiceConnectorSource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSource()
```


### DataOciSchServiceConnectorSourceCursor <a name="DataOciSchServiceConnectorSourceCursor" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursor.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursor()
```


### DataOciSchServiceConnectorSourceLogSources <a name="DataOciSchServiceConnectorSourceLogSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSources()
```


### DataOciSchServiceConnectorSourceMonitoringSources <a name="DataOciSchServiceConnectorSourceMonitoringSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSources()
```


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails()
```


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces()
```


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics()
```


### DataOciSchServiceConnectorTarget <a name="DataOciSchServiceConnectorTarget" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTarget.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorTarget()
```


### DataOciSchServiceConnectorTargetDimensions <a name="DataOciSchServiceConnectorTargetDimensions" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensions()
```


### DataOciSchServiceConnectorTargetDimensionsDimensionValue <a name="DataOciSchServiceConnectorTargetDimensionsDimensionValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValue.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValue()
```


### DataOciSchServiceConnectorTasks <a name="DataOciSchServiceConnectorTasks" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorTasks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSchServiceConnectorSourceCursorList <a name="DataOciSchServiceConnectorSourceCursorList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorSourceCursorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorSourceCursorOutputReference <a name="DataOciSchServiceConnectorSourceCursorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursor">DataOciSchServiceConnectorSourceCursor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorSourceCursor
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursor">DataOciSchServiceConnectorSourceCursor</a>

---


### DataOciSchServiceConnectorSourceList <a name="DataOciSchServiceConnectorSourceList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorSourceLogSourcesList <a name="DataOciSchServiceConnectorSourceLogSourcesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorSourceLogSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorSourceLogSourcesOutputReference <a name="DataOciSchServiceConnectorSourceLogSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSources">DataOciSchServiceConnectorSourceLogSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorSourceLogSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSources">DataOciSchServiceConnectorSourceLogSources</a>

---


### DataOciSchServiceConnectorSourceMonitoringSourcesList <a name="DataOciSchServiceConnectorSourceMonitoringSourcesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics"></a>

```python
metrics: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces">namespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces"></a>

```python
namespaces: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

---


### DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference <a name="DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetails">namespace_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSources">DataOciSchServiceConnectorSourceMonitoringSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `namespace_details`<sup>Required</sup> <a name="namespace_details" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetails"></a>

```python
namespace_details: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorSourceMonitoringSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSources">DataOciSchServiceConnectorSourceMonitoringSources</a>

---


### DataOciSchServiceConnectorSourceOutputReference <a name="DataOciSchServiceConnectorSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.configMap">config_map</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.cursor">cursor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList">DataOciSchServiceConnectorSourceCursorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.logSources">log_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList">DataOciSchServiceConnectorSourceLogSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.monitoringSources">monitoring_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList">DataOciSchServiceConnectorSourceMonitoringSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.pluginName">plugin_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSource">DataOciSchServiceConnectorSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_map`<sup>Required</sup> <a name="config_map" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.configMap"></a>

```python
config_map: str
```

- *Type:* str

---

##### `cursor`<sup>Required</sup> <a name="cursor" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.cursor"></a>

```python
cursor: DataOciSchServiceConnectorSourceCursorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList">DataOciSchServiceConnectorSourceCursorList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `log_sources`<sup>Required</sup> <a name="log_sources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.logSources"></a>

```python
log_sources: DataOciSchServiceConnectorSourceLogSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList">DataOciSchServiceConnectorSourceLogSourcesList</a>

---

##### `monitoring_sources`<sup>Required</sup> <a name="monitoring_sources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.monitoringSources"></a>

```python
monitoring_sources: DataOciSchServiceConnectorSourceMonitoringSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList">DataOciSchServiceConnectorSourceMonitoringSourcesList</a>

---

##### `plugin_name`<sup>Required</sup> <a name="plugin_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.pluginName"></a>

```python
plugin_name: str
```

- *Type:* str

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSource">DataOciSchServiceConnectorSource</a>

---


### DataOciSchServiceConnectorTargetDimensionsDimensionValueList <a name="DataOciSchServiceConnectorTargetDimensionsDimensionValueList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference <a name="DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValue">DataOciSchServiceConnectorTargetDimensionsDimensionValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorTargetDimensionsDimensionValue
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValue">DataOciSchServiceConnectorTargetDimensionsDimensionValue</a>

---


### DataOciSchServiceConnectorTargetDimensionsList <a name="DataOciSchServiceConnectorTargetDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorTargetDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorTargetDimensionsOutputReference <a name="DataOciSchServiceConnectorTargetDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.dimensionValue">dimension_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList">DataOciSchServiceConnectorTargetDimensionsDimensionValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensions">DataOciSchServiceConnectorTargetDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension_value`<sup>Required</sup> <a name="dimension_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.dimensionValue"></a>

```python
dimension_value: DataOciSchServiceConnectorTargetDimensionsDimensionValueList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList">DataOciSchServiceConnectorTargetDimensionsDimensionValueList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorTargetDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensions">DataOciSchServiceConnectorTargetDimensions</a>

---


### DataOciSchServiceConnectorTargetList <a name="DataOciSchServiceConnectorTargetList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorTargetOutputReference <a name="DataOciSchServiceConnectorTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbs">batch_rollover_size_in_mbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMs">batch_rollover_time_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchSizeInKbs">batch_size_in_kbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchSizeInNum">batch_size_in_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchTimeInSec">batch_time_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList">DataOciSchServiceConnectorTargetDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.enableFormattedMessaging">enable_formatted_messaging</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.logSourceIdentifier">log_source_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.objectNamePrefix">object_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.topicId">topic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTarget">DataOciSchServiceConnectorTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_rollover_size_in_mbs`<sup>Required</sup> <a name="batch_rollover_size_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbs"></a>

```python
batch_rollover_size_in_mbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_rollover_time_in_ms`<sup>Required</sup> <a name="batch_rollover_time_in_ms" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMs"></a>

```python
batch_rollover_time_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_in_kbs`<sup>Required</sup> <a name="batch_size_in_kbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchSizeInKbs"></a>

```python
batch_size_in_kbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_in_num`<sup>Required</sup> <a name="batch_size_in_num" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchSizeInNum"></a>

```python
batch_size_in_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_time_in_sec`<sup>Required</sup> <a name="batch_time_in_sec" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchTimeInSec"></a>

```python
batch_time_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.dimensions"></a>

```python
dimensions: DataOciSchServiceConnectorTargetDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList">DataOciSchServiceConnectorTargetDimensionsList</a>

---

##### `enable_formatted_messaging`<sup>Required</sup> <a name="enable_formatted_messaging" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.enableFormattedMessaging"></a>

```python
enable_formatted_messaging: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_source_identifier`<sup>Required</sup> <a name="log_source_identifier" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.logSourceIdentifier"></a>

```python
log_source_identifier: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object_name_prefix`<sup>Required</sup> <a name="object_name_prefix" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.objectNamePrefix"></a>

```python
object_name_prefix: str
```

- *Type:* str

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `topic_id`<sup>Required</sup> <a name="topic_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.topicId"></a>

```python
topic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTarget">DataOciSchServiceConnectorTarget</a>

---


### DataOciSchServiceConnectorTasksList <a name="DataOciSchServiceConnectorTasksList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSchServiceConnectorTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSchServiceConnectorTasksOutputReference <a name="DataOciSchServiceConnectorTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_sch_service_connector

dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.batchSizeInKbs">batch_size_in_kbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.batchTimeInSec">batch_time_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasks">DataOciSchServiceConnectorTasks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_size_in_kbs`<sup>Required</sup> <a name="batch_size_in_kbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.batchSizeInKbs"></a>

```python
batch_size_in_kbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_time_in_sec`<sup>Required</sup> <a name="batch_time_in_sec" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.batchTimeInSec"></a>

```python
batch_time_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSchServiceConnectorTasks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasks">DataOciSchServiceConnectorTasks</a>

---



