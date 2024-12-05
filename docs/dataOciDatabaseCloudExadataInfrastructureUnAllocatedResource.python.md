# `dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource` Submodule <a name="`dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource oci_database_cloud_exadata_infrastructure_un_allocated_resource}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructure_un_allocated_resource

dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_exadata_infrastructure_id: str,
  db_servers: typing.List[str] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#cloud_exadata_infrastructure_id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#db_servers DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.cloudExadataInfrastructureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#cloud_exadata_infrastructure_id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#cloud_exadata_infrastructure_id}.

---

##### `db_servers`<sup>Optional</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.dbServers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#db_servers DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#db_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetDbServers">reset_db_servers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_db_servers` <a name="reset_db_servers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetDbServers"></a>

```python
def reset_db_servers() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructure_un_allocated_resource

dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructure_un_allocated_resource

dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructure_un_allocated_resource

dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructure_un_allocated_resource

dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudAutonomousVmClusters">cloud_autonomous_vm_clusters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureDisplayName">cloud_exadata_infrastructure_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.exadataStorageInTbs">exadata_storage_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.localStorageInGbs">local_storage_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureIdInput">cloud_exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dbServersInput">db_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cloud_autonomous_vm_clusters`<sup>Required</sup> <a name="cloud_autonomous_vm_clusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudAutonomousVmClusters"></a>

```python
cloud_autonomous_vm_clusters: DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList</a>

---

##### `cloud_exadata_infrastructure_display_name`<sup>Required</sup> <a name="cloud_exadata_infrastructure_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureDisplayName"></a>

```python
cloud_exadata_infrastructure_display_name: str
```

- *Type:* str

---

##### `exadata_storage_in_tbs`<sup>Required</sup> <a name="exadata_storage_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.exadataStorageInTbs"></a>

```python
exadata_storage_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_storage_in_gbs`<sup>Required</sup> <a name="local_storage_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.localStorageInGbs"></a>

```python
local_storage_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloud_exadata_infrastructure_id_input`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureIdInput"></a>

```python
cloud_exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `db_servers_input`<sup>Optional</sup> <a name="db_servers_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dbServersInput"></a>

```python
db_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

---

##### `db_servers`<sup>Required</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructure_un_allocated_resource

dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters()
```


### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructure_un_allocated_resource

dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_exadata_infrastructure_id: str,
  db_servers: typing.List[str] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#cloud_exadata_infrastructure_id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#db_servers DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#cloud_exadata_infrastructure_id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#cloud_exadata_infrastructure_id}.

---

##### `db_servers`<sup>Optional</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#db_servers DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#db_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructure_un_allocated_resource

dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_cloud_exadata_infrastructure_un_allocated_resource

dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.unAllocatedAdbStorageInTbs">un_allocated_adb_storage_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `un_allocated_adb_storage_in_tbs`<sup>Required</sup> <a name="un_allocated_adb_storage_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.unAllocatedAdbStorageInTbs"></a>

```python
un_allocated_adb_storage_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters</a>

---



