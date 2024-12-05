# `dataOciCloudMigrationsMigrationAssets` Submodule <a name="`dataOciCloudMigrationsMigrationAssets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationAssets <a name="DataOciCloudMigrationsMigrationAssets" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets oci_cloud_migrations_migration_assets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationAssetsFilter]] = None,
  id: str = None,
  migration_asset_id: str = None,
  migration_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#display_name DataOciCloudMigrationsMigrationAssets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#id DataOciCloudMigrationsMigrationAssets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.migrationAssetId">migration_asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#migration_asset_id DataOciCloudMigrationsMigrationAssets#migration_asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.migrationId">migration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#migration_id DataOciCloudMigrationsMigrationAssets#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#state DataOciCloudMigrationsMigrationAssets#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#display_name DataOciCloudMigrationsMigrationAssets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#filter DataOciCloudMigrationsMigrationAssets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#id DataOciCloudMigrationsMigrationAssets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migration_asset_id`<sup>Optional</sup> <a name="migration_asset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.migrationAssetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#migration_asset_id DataOciCloudMigrationsMigrationAssets#migration_asset_id}.

---

##### `migration_id`<sup>Optional</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.migrationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#migration_id DataOciCloudMigrationsMigrationAssets#migration_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#state DataOciCloudMigrationsMigrationAssets#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetMigrationAssetId">reset_migration_asset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetMigrationId">reset_migration_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationAssetsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_migration_asset_id` <a name="reset_migration_asset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetMigrationAssetId"></a>

```python
def reset_migration_asset_id() -> None
```

##### `reset_migration_id` <a name="reset_migration_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetMigrationId"></a>

```python
def reset_migration_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationAssets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationAssets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudMigrationsMigrationAssets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudMigrationsMigrationAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList">DataOciCloudMigrationsMigrationAssetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationAssetCollection">migration_asset_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationAssetIdInput">migration_asset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationIdInput">migration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationAssetId">migration_asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationId">migration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.filter"></a>

```python
filter: DataOciCloudMigrationsMigrationAssetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList">DataOciCloudMigrationsMigrationAssetsFilterList</a>

---

##### `migration_asset_collection`<sup>Required</sup> <a name="migration_asset_collection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationAssetCollection"></a>

```python
migration_asset_collection: DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationAssetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `migration_asset_id_input`<sup>Optional</sup> <a name="migration_asset_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationAssetIdInput"></a>

```python
migration_asset_id_input: str
```

- *Type:* str

---

##### `migration_id_input`<sup>Optional</sup> <a name="migration_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationIdInput"></a>

```python
migration_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `migration_asset_id`<sup>Required</sup> <a name="migration_asset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationAssetId"></a>

```python
migration_asset_id: str
```

- *Type:* str

---

##### `migration_id`<sup>Required</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationId"></a>

```python
migration_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationAssetsConfig <a name="DataOciCloudMigrationsMigrationAssetsConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationAssetsFilter]] = None,
  id: str = None,
  migration_asset_id: str = None,
  migration_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#display_name DataOciCloudMigrationsMigrationAssets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#id DataOciCloudMigrationsMigrationAssets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.migrationAssetId">migration_asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#migration_asset_id DataOciCloudMigrationsMigrationAssets#migration_asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.migrationId">migration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#migration_id DataOciCloudMigrationsMigrationAssets#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#state DataOciCloudMigrationsMigrationAssets#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#display_name DataOciCloudMigrationsMigrationAssets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationAssetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#filter DataOciCloudMigrationsMigrationAssets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#id DataOciCloudMigrationsMigrationAssets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migration_asset_id`<sup>Optional</sup> <a name="migration_asset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.migrationAssetId"></a>

```python
migration_asset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#migration_asset_id DataOciCloudMigrationsMigrationAssets#migration_asset_id}.

---

##### `migration_id`<sup>Optional</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.migrationId"></a>

```python
migration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#migration_id DataOciCloudMigrationsMigrationAssets#migration_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#state DataOciCloudMigrationsMigrationAssets#state}.

---

### DataOciCloudMigrationsMigrationAssetsFilter <a name="DataOciCloudMigrationsMigrationAssetsFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#name DataOciCloudMigrationsMigrationAssets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#values DataOciCloudMigrationsMigrationAssets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#regex DataOciCloudMigrationsMigrationAssets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#name DataOciCloudMigrationsMigrationAssets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#values DataOciCloudMigrationsMigrationAssets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#regex DataOciCloudMigrationsMigrationAssets#regex}.

---

### DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection <a name="DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection()
```


### DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems <a name="DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsMigrationAssetsFilterList <a name="DataOciCloudMigrationsMigrationAssetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationAssetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationAssetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>]]

---


### DataOciCloudMigrationsMigrationAssetsFilterOutputReference <a name="DataOciCloudMigrationsMigrationAssetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCloudMigrationsMigrationAssetsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>]

---


### DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList <a name="DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference <a name="DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.dependedOnBy">depended_on_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.inventoryAssetId">inventory_asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.migrationAssetDependsOn">migration_asset_depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.migrationId">migration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.parentSnapshot">parent_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.replicationCompartmentId">replication_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.replicationScheduleId">replication_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.snapShotBucketName">snap_shot_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.snapshots">snapshots</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.sourceAssetId">source_asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `depended_on_by`<sup>Required</sup> <a name="depended_on_by" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.dependedOnBy"></a>

```python
depended_on_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inventory_asset_id`<sup>Required</sup> <a name="inventory_asset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.inventoryAssetId"></a>

```python
inventory_asset_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `migration_asset_depends_on`<sup>Required</sup> <a name="migration_asset_depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.migrationAssetDependsOn"></a>

```python
migration_asset_depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `migration_id`<sup>Required</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.migrationId"></a>

```python
migration_id: str
```

- *Type:* str

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parent_snapshot`<sup>Required</sup> <a name="parent_snapshot" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.parentSnapshot"></a>

```python
parent_snapshot: str
```

- *Type:* str

---

##### `replication_compartment_id`<sup>Required</sup> <a name="replication_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.replicationCompartmentId"></a>

```python
replication_compartment_id: str
```

- *Type:* str

---

##### `replication_schedule_id`<sup>Required</sup> <a name="replication_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.replicationScheduleId"></a>

```python
replication_schedule_id: str
```

- *Type:* str

---

##### `snap_shot_bucket_name`<sup>Required</sup> <a name="snap_shot_bucket_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.snapShotBucketName"></a>

```python
snap_shot_bucket_name: str
```

- *Type:* str

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.snapshots"></a>

```python
snapshots: StringMap
```

- *Type:* cdktf.StringMap

---

##### `source_asset_id`<sup>Required</sup> <a name="source_asset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.sourceAssetId"></a>

```python
source_asset_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems</a>

---


### DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList <a name="DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference <a name="DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_assets

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.items"></a>

```python
items: DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection</a>

---



