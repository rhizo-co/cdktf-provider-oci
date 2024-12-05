# `dataOciMediaServicesMediaWorkflowTaskDeclaration` Submodule <a name="`dataOciMediaServicesMediaWorkflowTaskDeclaration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesMediaWorkflowTaskDeclaration <a name="DataOciMediaServicesMediaWorkflowTaskDeclaration" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration oci_media_services_media_workflow_task_declaration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_task_declaration

dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  id: str = None,
  is_current: typing.Union[bool, IResolvable] = None,
  name: str = None,
  version: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#compartment_id DataOciMediaServicesMediaWorkflowTaskDeclaration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#id DataOciMediaServicesMediaWorkflowTaskDeclaration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.isCurrent">is_current</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#is_current DataOciMediaServicesMediaWorkflowTaskDeclaration#is_current}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#name DataOciMediaServicesMediaWorkflowTaskDeclaration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#version DataOciMediaServicesMediaWorkflowTaskDeclaration#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#compartment_id DataOciMediaServicesMediaWorkflowTaskDeclaration#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#id DataOciMediaServicesMediaWorkflowTaskDeclaration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_current`<sup>Optional</sup> <a name="is_current" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.isCurrent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#is_current DataOciMediaServicesMediaWorkflowTaskDeclaration#is_current}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#name DataOciMediaServicesMediaWorkflowTaskDeclaration#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.version"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#version DataOciMediaServicesMediaWorkflowTaskDeclaration#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetIsCurrent">reset_is_current</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_current` <a name="reset_is_current" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetIsCurrent"></a>

```python
def reset_is_current() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_version` <a name="reset_version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowTaskDeclaration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_task_declaration

dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_task_declaration

dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_task_declaration

dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_task_declaration

dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowTaskDeclaration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMediaServicesMediaWorkflowTaskDeclaration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMediaServicesMediaWorkflowTaskDeclaration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesMediaWorkflowTaskDeclaration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList">DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrentInput">is_current_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrent">is_current</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.items"></a>

```python
items: DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList">DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_current_input`<sup>Optional</sup> <a name="is_current_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrentInput"></a>

```python
is_current_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_current`<sup>Required</sup> <a name="is_current" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrent"></a>

```python
is_current: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesMediaWorkflowTaskDeclarationConfig <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_task_declaration

dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  id: str = None,
  is_current: typing.Union[bool, IResolvable] = None,
  name: str = None,
  version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#compartment_id DataOciMediaServicesMediaWorkflowTaskDeclaration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#id DataOciMediaServicesMediaWorkflowTaskDeclaration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.isCurrent">is_current</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#is_current DataOciMediaServicesMediaWorkflowTaskDeclaration#is_current}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#name DataOciMediaServicesMediaWorkflowTaskDeclaration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#version DataOciMediaServicesMediaWorkflowTaskDeclaration#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#compartment_id DataOciMediaServicesMediaWorkflowTaskDeclaration#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#id DataOciMediaServicesMediaWorkflowTaskDeclaration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_current`<sup>Optional</sup> <a name="is_current" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.isCurrent"></a>

```python
is_current: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#is_current DataOciMediaServicesMediaWorkflowTaskDeclaration#is_current}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#name DataOciMediaServicesMediaWorkflowTaskDeclaration#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#version DataOciMediaServicesMediaWorkflowTaskDeclaration#version}.

---

### DataOciMediaServicesMediaWorkflowTaskDeclarationItems <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_task_declaration

dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_task_declaration

dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_task_declaration

dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchema">parameters_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchemaAllowingReferences">parameters_schema_allowing_references</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems">DataOciMediaServicesMediaWorkflowTaskDeclarationItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters_schema`<sup>Required</sup> <a name="parameters_schema" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchema"></a>

```python
parameters_schema: str
```

- *Type:* str

---

##### `parameters_schema_allowing_references`<sup>Required</sup> <a name="parameters_schema_allowing_references" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchemaAllowingReferences"></a>

```python
parameters_schema_allowing_references: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesMediaWorkflowTaskDeclarationItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems">DataOciMediaServicesMediaWorkflowTaskDeclarationItems</a>

---



