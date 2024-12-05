# `dataOciDataintegrationWorkspaceImportRequest` Submodule <a name="`dataOciDataintegrationWorkspaceImportRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceImportRequest <a name="DataOciDataintegrationWorkspaceImportRequest" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request oci_dataintegration_workspace_import_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_request

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  import_request_key: str,
  workspace_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.importRequestKey">import_request_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#import_request_key DataOciDataintegrationWorkspaceImportRequest#import_request_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#workspace_id DataOciDataintegrationWorkspaceImportRequest#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `import_request_key`<sup>Required</sup> <a name="import_request_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.importRequestKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#import_request_key DataOciDataintegrationWorkspaceImportRequest#import_request_key}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#workspace_id DataOciDataintegrationWorkspaceImportRequest#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_request

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_request

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_request

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_request

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataintegrationWorkspaceImportRequest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataintegrationWorkspaceImportRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceImportRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncluded">are_data_asset_references_included</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.errorMessages">error_messages</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importConflictResolution">import_conflict_resolution</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList">DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importedObjects">imported_objects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList">DataOciDataintegrationWorkspaceImportRequestImportedObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectKeyForImport">object_key_for_import</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageRegion">object_storage_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageTenancyId">object_storage_tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeEndedInMillis">time_ended_in_millis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeStartedInMillis">time_started_in_millis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.totalImportedObjectCount">total_imported_object_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKeyInput">import_request_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKey">import_request_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `are_data_asset_references_included`<sup>Required</sup> <a name="are_data_asset_references_included" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncluded"></a>

```python
are_data_asset_references_included: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `error_messages`<sup>Required</sup> <a name="error_messages" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.errorMessages"></a>

```python
error_messages: StringMap
```

- *Type:* cdktf.StringMap

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_conflict_resolution`<sup>Required</sup> <a name="import_conflict_resolution" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importConflictResolution"></a>

```python
import_conflict_resolution: DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList">DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList</a>

---

##### `imported_objects`<sup>Required</sup> <a name="imported_objects" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importedObjects"></a>

```python
imported_objects: DataOciDataintegrationWorkspaceImportRequestImportedObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList">DataOciDataintegrationWorkspaceImportRequestImportedObjectsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_key_for_import`<sup>Required</sup> <a name="object_key_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectKeyForImport"></a>

```python
object_key_for_import: str
```

- *Type:* str

---

##### `object_storage_region`<sup>Required</sup> <a name="object_storage_region" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageRegion"></a>

```python
object_storage_region: str
```

- *Type:* str

---

##### `object_storage_tenancy_id`<sup>Required</sup> <a name="object_storage_tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageTenancyId"></a>

```python
object_storage_tenancy_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_ended_in_millis`<sup>Required</sup> <a name="time_ended_in_millis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeEndedInMillis"></a>

```python
time_ended_in_millis: str
```

- *Type:* str

---

##### `time_started_in_millis`<sup>Required</sup> <a name="time_started_in_millis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeStartedInMillis"></a>

```python
time_started_in_millis: str
```

- *Type:* str

---

##### `total_imported_object_count`<sup>Required</sup> <a name="total_imported_object_count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.totalImportedObjectCount"></a>

```python
total_imported_object_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `import_request_key_input`<sup>Optional</sup> <a name="import_request_key_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKeyInput"></a>

```python
import_request_key_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `import_request_key`<sup>Required</sup> <a name="import_request_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKey"></a>

```python
import_request_key: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceImportRequestConfig <a name="DataOciDataintegrationWorkspaceImportRequestConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_request

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  import_request_key: str,
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.importRequestKey">import_request_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#import_request_key DataOciDataintegrationWorkspaceImportRequest#import_request_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#workspace_id DataOciDataintegrationWorkspaceImportRequest#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `import_request_key`<sup>Required</sup> <a name="import_request_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.importRequestKey"></a>

```python
import_request_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#import_request_key DataOciDataintegrationWorkspaceImportRequest#import_request_key}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#workspace_id DataOciDataintegrationWorkspaceImportRequest#workspace_id}.

---

### DataOciDataintegrationWorkspaceImportRequestImportConflictResolution <a name="DataOciDataintegrationWorkspaceImportRequestImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_request

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution()
```


### DataOciDataintegrationWorkspaceImportRequestImportedObjects <a name="DataOciDataintegrationWorkspaceImportRequestImportedObjects" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_request

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList <a name="DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_request

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_request

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefix">duplicate_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffix">duplicate_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionType">import_conflict_resolution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution">DataOciDataintegrationWorkspaceImportRequestImportConflictResolution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duplicate_prefix`<sup>Required</sup> <a name="duplicate_prefix" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefix"></a>

```python
duplicate_prefix: str
```

- *Type:* str

---

##### `duplicate_suffix`<sup>Required</sup> <a name="duplicate_suffix" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffix"></a>

```python
duplicate_suffix: str
```

- *Type:* str

---

##### `import_conflict_resolution_type`<sup>Required</sup> <a name="import_conflict_resolution_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionType"></a>

```python
import_conflict_resolution_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceImportRequestImportConflictResolution
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution">DataOciDataintegrationWorkspaceImportRequestImportConflictResolution</a>

---


### DataOciDataintegrationWorkspaceImportRequestImportedObjectsList <a name="DataOciDataintegrationWorkspaceImportRequestImportedObjectsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_request

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_request

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.aggregatorKey">aggregator_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.namePath">name_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.newKey">new_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectVersion">object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.oldKey">old_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.resolutionAction">resolution_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.timeUpdatedInMillis">time_updated_in_millis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects">DataOciDataintegrationWorkspaceImportRequestImportedObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregator_key`<sup>Required</sup> <a name="aggregator_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.aggregatorKey"></a>

```python
aggregator_key: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_path`<sup>Required</sup> <a name="name_path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.namePath"></a>

```python
name_path: str
```

- *Type:* str

---

##### `new_key`<sup>Required</sup> <a name="new_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.newKey"></a>

```python
new_key: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `object_version`<sup>Required</sup> <a name="object_version" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectVersion"></a>

```python
object_version: str
```

- *Type:* str

---

##### `old_key`<sup>Required</sup> <a name="old_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.oldKey"></a>

```python
old_key: str
```

- *Type:* str

---

##### `resolution_action`<sup>Required</sup> <a name="resolution_action" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.resolutionAction"></a>

```python
resolution_action: str
```

- *Type:* str

---

##### `time_updated_in_millis`<sup>Required</sup> <a name="time_updated_in_millis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.timeUpdatedInMillis"></a>

```python
time_updated_in_millis: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceImportRequestImportedObjects
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects">DataOciDataintegrationWorkspaceImportRequestImportedObjects</a>

---



