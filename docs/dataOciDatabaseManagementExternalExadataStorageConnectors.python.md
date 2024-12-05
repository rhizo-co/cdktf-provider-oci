# `dataOciDatabaseManagementExternalExadataStorageConnectors` Submodule <a name="`dataOciDatabaseManagementExternalExadataStorageConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataStorageConnectors <a name="DataOciDatabaseManagementExternalExadataStorageConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors oci_database_management_external_exadata_storage_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  external_exadata_infrastructure_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalExadataStorageConnectorsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#compartment_id DataOciDatabaseManagementExternalExadataStorageConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.externalExadataInfrastructureId">external_exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#external_exadata_infrastructure_id DataOciDatabaseManagementExternalExadataStorageConnectors#external_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#display_name DataOciDatabaseManagementExternalExadataStorageConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#id DataOciDatabaseManagementExternalExadataStorageConnectors#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#compartment_id DataOciDatabaseManagementExternalExadataStorageConnectors#compartment_id}.

---

##### `external_exadata_infrastructure_id`<sup>Required</sup> <a name="external_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.externalExadataInfrastructureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#external_exadata_infrastructure_id DataOciDatabaseManagementExternalExadataStorageConnectors#external_exadata_infrastructure_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#display_name DataOciDatabaseManagementExternalExadataStorageConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#filter DataOciDatabaseManagementExternalExadataStorageConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#id DataOciDatabaseManagementExternalExadataStorageConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalExadataStorageConnectorsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageConnectors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementExternalExadataStorageConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataStorageConnectorCollection">external_exadata_storage_connector_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList">DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataInfrastructureIdInput">external_exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataInfrastructureId">external_exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `external_exadata_storage_connector_collection`<sup>Required</sup> <a name="external_exadata_storage_connector_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataStorageConnectorCollection"></a>

```python
external_exadata_storage_connector_collection: DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.filter"></a>

```python
filter: DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList">DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_exadata_infrastructure_id_input`<sup>Optional</sup> <a name="external_exadata_infrastructure_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataInfrastructureIdInput"></a>

```python
external_exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalExadataStorageConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_exadata_infrastructure_id`<sup>Required</sup> <a name="external_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataInfrastructureId"></a>

```python
external_exadata_infrastructure_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataStorageConnectorsConfig <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  external_exadata_infrastructure_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalExadataStorageConnectorsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#compartment_id DataOciDatabaseManagementExternalExadataStorageConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.externalExadataInfrastructureId">external_exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#external_exadata_infrastructure_id DataOciDatabaseManagementExternalExadataStorageConnectors#external_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#display_name DataOciDatabaseManagementExternalExadataStorageConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#id DataOciDatabaseManagementExternalExadataStorageConnectors#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#compartment_id DataOciDatabaseManagementExternalExadataStorageConnectors#compartment_id}.

---

##### `external_exadata_infrastructure_id`<sup>Required</sup> <a name="external_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.externalExadataInfrastructureId"></a>

```python
external_exadata_infrastructure_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#external_exadata_infrastructure_id DataOciDatabaseManagementExternalExadataStorageConnectors#external_exadata_infrastructure_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#display_name DataOciDatabaseManagementExternalExadataStorageConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalExadataStorageConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#filter DataOciDatabaseManagementExternalExadataStorageConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#id DataOciDatabaseManagementExternalExadataStorageConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection()
```


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems()
```


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo()
```


### DataOciDatabaseManagementExternalExadataStorageConnectorsFilter <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#name DataOciDatabaseManagementExternalExadataStorageConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#values DataOciDatabaseManagementExternalExadataStorageConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#regex DataOciDatabaseManagementExternalExadataStorageConnectors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#name DataOciDatabaseManagementExternalExadataStorageConnectors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#values DataOciDatabaseManagementExternalExadataStorageConnectors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#regex DataOciDatabaseManagementExternalExadataStorageConnectors#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStoreLocation">ssl_trust_store_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStorePassword">ssl_trust_store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStoreType">ssl_trust_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssl_trust_store_location`<sup>Required</sup> <a name="ssl_trust_store_location" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStoreLocation"></a>

```python
ssl_trust_store_location: str
```

- *Type:* str

---

##### `ssl_trust_store_password`<sup>Required</sup> <a name="ssl_trust_store_password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStorePassword"></a>

```python
ssl_trust_store_password: str
```

- *Type:* str

---

##### `ssl_trust_store_type`<sup>Required</sup> <a name="ssl_trust_store_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStoreType"></a>

```python
ssl_trust_store_type: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo</a>

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.additionalDetails">additional_details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.connectionUri">connection_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.connectorName">connector_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.credentialInfo">credential_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.internalId">internal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.storageServerId">storage_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_details`<sup>Required</sup> <a name="additional_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.additionalDetails"></a>

```python
additional_details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `connection_uri`<sup>Required</sup> <a name="connection_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.connectionUri"></a>

```python
connection_uri: str
```

- *Type:* str

---

##### `connector_name`<sup>Required</sup> <a name="connector_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.connectorName"></a>

```python
connector_name: str
```

- *Type:* str

---

##### `credential_info`<sup>Required</sup> <a name="credential_info" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.credentialInfo"></a>

```python
credential_info: DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_id`<sup>Required</sup> <a name="internal_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.internalId"></a>

```python
internal_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `storage_server_id`<sup>Required</sup> <a name="storage_server_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.storageServerId"></a>

```python
storage_server_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems</a>

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection</a>

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementExternalExadataStorageConnectorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>]]

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_external_exadata_storage_connectors

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementExternalExadataStorageConnectorsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>]

---



