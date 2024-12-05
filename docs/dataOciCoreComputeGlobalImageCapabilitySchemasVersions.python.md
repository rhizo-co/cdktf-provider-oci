# `dataOciCoreComputeGlobalImageCapabilitySchemasVersions` Submodule <a name="`dataOciCoreComputeGlobalImageCapabilitySchemasVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeGlobalImageCapabilitySchemasVersions <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersions" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions oci_core_compute_global_image_capability_schemas_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_global_image_capability_schemas_versions

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_global_image_capability_schema_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.computeGlobalImageCapabilitySchemaId">compute_global_image_capability_schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#compute_global_image_capability_schema_id DataOciCoreComputeGlobalImageCapabilitySchemasVersions#compute_global_image_capability_schema_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#display_name DataOciCoreComputeGlobalImageCapabilitySchemasVersions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#id DataOciCoreComputeGlobalImageCapabilitySchemasVersions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_global_image_capability_schema_id`<sup>Required</sup> <a name="compute_global_image_capability_schema_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.computeGlobalImageCapabilitySchemaId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#compute_global_image_capability_schema_id DataOciCoreComputeGlobalImageCapabilitySchemasVersions#compute_global_image_capability_schema_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#display_name DataOciCoreComputeGlobalImageCapabilitySchemasVersions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#filter DataOciCoreComputeGlobalImageCapabilitySchemasVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#id DataOciCoreComputeGlobalImageCapabilitySchemasVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreComputeGlobalImageCapabilitySchemasVersions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_global_image_capability_schemas_versions

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_global_image_capability_schemas_versions

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_global_image_capability_schemas_versions

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_global_image_capability_schemas_versions

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreComputeGlobalImageCapabilitySchemasVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreComputeGlobalImageCapabilitySchemasVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreComputeGlobalImageCapabilitySchemasVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeGlobalImageCapabilitySchemasVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.computeGlobalImageCapabilitySchemaVersions">compute_global_image_capability_schema_versions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.computeGlobalImageCapabilitySchemaIdInput">compute_global_image_capability_schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.computeGlobalImageCapabilitySchemaId">compute_global_image_capability_schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compute_global_image_capability_schema_versions`<sup>Required</sup> <a name="compute_global_image_capability_schema_versions" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.computeGlobalImageCapabilitySchemaVersions"></a>

```python
compute_global_image_capability_schema_versions: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.filter"></a>

```python
filter: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList</a>

---

##### `compute_global_image_capability_schema_id_input`<sup>Optional</sup> <a name="compute_global_image_capability_schema_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.computeGlobalImageCapabilitySchemaIdInput"></a>

```python
compute_global_image_capability_schema_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compute_global_image_capability_schema_id`<sup>Required</sup> <a name="compute_global_image_capability_schema_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.computeGlobalImageCapabilitySchemaId"></a>

```python
compute_global_image_capability_schema_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_global_image_capability_schemas_versions

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions()
```


### DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_global_image_capability_schemas_versions

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_global_image_capability_schema_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.computeGlobalImageCapabilitySchemaId">compute_global_image_capability_schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#compute_global_image_capability_schema_id DataOciCoreComputeGlobalImageCapabilitySchemasVersions#compute_global_image_capability_schema_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#display_name DataOciCoreComputeGlobalImageCapabilitySchemasVersions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#id DataOciCoreComputeGlobalImageCapabilitySchemasVersions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_global_image_capability_schema_id`<sup>Required</sup> <a name="compute_global_image_capability_schema_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.computeGlobalImageCapabilitySchemaId"></a>

```python
compute_global_image_capability_schema_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#compute_global_image_capability_schema_id DataOciCoreComputeGlobalImageCapabilitySchemasVersions#compute_global_image_capability_schema_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#display_name DataOciCoreComputeGlobalImageCapabilitySchemasVersions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#filter DataOciCoreComputeGlobalImageCapabilitySchemasVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#id DataOciCoreComputeGlobalImageCapabilitySchemasVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_global_image_capability_schemas_versions

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#name DataOciCoreComputeGlobalImageCapabilitySchemasVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#values DataOciCoreComputeGlobalImageCapabilitySchemasVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#regex DataOciCoreComputeGlobalImageCapabilitySchemasVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#name DataOciCoreComputeGlobalImageCapabilitySchemasVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#values DataOciCoreComputeGlobalImageCapabilitySchemasVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#regex DataOciCoreComputeGlobalImageCapabilitySchemasVersions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_global_image_capability_schemas_versions

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_global_image_capability_schemas_versions

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.computeGlobalImageCapabilitySchemaId">compute_global_image_capability_schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.schemaData">schema_data</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_global_image_capability_schema_id`<sup>Required</sup> <a name="compute_global_image_capability_schema_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.computeGlobalImageCapabilitySchemaId"></a>

```python
compute_global_image_capability_schema_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema_data`<sup>Required</sup> <a name="schema_data" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.schemaData"></a>

```python
schema_data: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions</a>

---


### DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_global_image_capability_schemas_versions

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>]]

---


### DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_global_image_capability_schemas_versions

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>]

---


