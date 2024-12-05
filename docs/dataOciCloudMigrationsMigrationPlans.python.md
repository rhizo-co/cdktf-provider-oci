# `dataOciCloudMigrationsMigrationPlans` Submodule <a name="`dataOciCloudMigrationsMigrationPlans` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationPlans <a name="DataOciCloudMigrationsMigrationPlans" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans oci_cloud_migrations_migration_plans}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationPlansFilter]] = None,
  id: str = None,
  migration_id: str = None,
  migration_plan_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#compartment_id DataOciCloudMigrationsMigrationPlans#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#display_name DataOciCloudMigrationsMigrationPlans#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#id DataOciCloudMigrationsMigrationPlans#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.migrationId">migration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_id DataOciCloudMigrationsMigrationPlans#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.migrationPlanId">migration_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_plan_id DataOciCloudMigrationsMigrationPlans#migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#state DataOciCloudMigrationsMigrationPlans#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#compartment_id DataOciCloudMigrationsMigrationPlans#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#display_name DataOciCloudMigrationsMigrationPlans#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#filter DataOciCloudMigrationsMigrationPlans#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#id DataOciCloudMigrationsMigrationPlans#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migration_id`<sup>Optional</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.migrationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_id DataOciCloudMigrationsMigrationPlans#migration_id}.

---

##### `migration_plan_id`<sup>Optional</sup> <a name="migration_plan_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.migrationPlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_plan_id DataOciCloudMigrationsMigrationPlans#migration_plan_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#state DataOciCloudMigrationsMigrationPlans#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationId">reset_migration_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationPlanId">reset_migration_plan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationPlansFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_migration_id` <a name="reset_migration_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationId"></a>

```python
def reset_migration_id() -> None
```

##### `reset_migration_plan_id` <a name="reset_migration_plan_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationPlanId"></a>

```python
def reset_migration_plan_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlans resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlans resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudMigrationsMigrationPlans to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudMigrationsMigrationPlans that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationPlans to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList">DataOciCloudMigrationsMigrationPlansFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanCollection">migration_plan_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationIdInput">migration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanIdInput">migration_plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationId">migration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanId">migration_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filter"></a>

```python
filter: DataOciCloudMigrationsMigrationPlansFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList">DataOciCloudMigrationsMigrationPlansFilterList</a>

---

##### `migration_plan_collection`<sup>Required</sup> <a name="migration_plan_collection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanCollection"></a>

```python
migration_plan_collection: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationPlansFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `migration_id_input`<sup>Optional</sup> <a name="migration_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationIdInput"></a>

```python
migration_id_input: str
```

- *Type:* str

---

##### `migration_plan_id_input`<sup>Optional</sup> <a name="migration_plan_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanIdInput"></a>

```python
migration_plan_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `migration_id`<sup>Required</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationId"></a>

```python
migration_id: str
```

- *Type:* str

---

##### `migration_plan_id`<sup>Required</sup> <a name="migration_plan_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanId"></a>

```python
migration_plan_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationPlansConfig <a name="DataOciCloudMigrationsMigrationPlansConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationPlansFilter]] = None,
  id: str = None,
  migration_id: str = None,
  migration_plan_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#compartment_id DataOciCloudMigrationsMigrationPlans#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#display_name DataOciCloudMigrationsMigrationPlans#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#id DataOciCloudMigrationsMigrationPlans#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationId">migration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_id DataOciCloudMigrationsMigrationPlans#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationPlanId">migration_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_plan_id DataOciCloudMigrationsMigrationPlans#migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#state DataOciCloudMigrationsMigrationPlans#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#compartment_id DataOciCloudMigrationsMigrationPlans#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#display_name DataOciCloudMigrationsMigrationPlans#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationPlansFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#filter DataOciCloudMigrationsMigrationPlans#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#id DataOciCloudMigrationsMigrationPlans#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migration_id`<sup>Optional</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationId"></a>

```python
migration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_id DataOciCloudMigrationsMigrationPlans#migration_id}.

---

##### `migration_plan_id`<sup>Optional</sup> <a name="migration_plan_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationPlanId"></a>

```python
migration_plan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_plan_id DataOciCloudMigrationsMigrationPlans#migration_plan_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#state DataOciCloudMigrationsMigrationPlans#state}.

---

### DataOciCloudMigrationsMigrationPlansFilter <a name="DataOciCloudMigrationsMigrationPlansFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#name DataOciCloudMigrationsMigrationPlans#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#values DataOciCloudMigrationsMigrationPlans#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#regex DataOciCloudMigrationsMigrationPlans#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#name DataOciCloudMigrationsMigrationPlans#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#values DataOciCloudMigrationsMigrationPlans#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#regex DataOciCloudMigrationsMigrationPlans#regex}.

---

### DataOciCloudMigrationsMigrationPlansMigrationPlanCollection <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection()
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems()
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats()
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost()
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute()
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage()
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage()
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes()
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies()
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsMigrationPlansFilterList <a name="DataOciCloudMigrationsMigrationPlansFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlansFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationPlansFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>]]

---


### DataOciCloudMigrationsMigrationPlansFilterOutputReference <a name="DataOciCloudMigrationsMigrationPlansFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCloudMigrationsMigrationPlansFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter">DataOciCloudMigrationsMigrationPlansFilter</a>]

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.totalEstimatedCost">total_estimated_cost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.vmCount">vm_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `total_estimated_cost`<sup>Required</sup> <a name="total_estimated_cost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.totalEstimatedCost"></a>

```python
total_estimated_cost: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList</a>

---

##### `vm_count`<sup>Required</sup> <a name="vm_count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.vmCount"></a>

```python
vm_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount">gpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour">gpu_per_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription">gpu_per_hour_by_subscription</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb">memory_amount_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour">memory_gb_per_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription">memory_gb_per_hour_by_subscription</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour">ocpu_per_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription">ocpu_per_hour_by_subscription</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour">total_per_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription">total_per_hour_by_subscription</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gpu_count`<sup>Required</sup> <a name="gpu_count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount"></a>

```python
gpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_per_hour`<sup>Required</sup> <a name="gpu_per_hour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour"></a>

```python
gpu_per_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_per_hour_by_subscription`<sup>Required</sup> <a name="gpu_per_hour_by_subscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription"></a>

```python
gpu_per_hour_by_subscription: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_amount_gb`<sup>Required</sup> <a name="memory_amount_gb" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb"></a>

```python
memory_amount_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb_per_hour`<sup>Required</sup> <a name="memory_gb_per_hour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour"></a>

```python
memory_gb_per_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb_per_hour_by_subscription`<sup>Required</sup> <a name="memory_gb_per_hour_by_subscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription"></a>

```python
memory_gb_per_hour_by_subscription: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_count`<sup>Required</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_per_hour`<sup>Required</sup> <a name="ocpu_per_hour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour"></a>

```python
ocpu_per_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_per_hour_by_subscription`<sup>Required</sup> <a name="ocpu_per_hour_by_subscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription"></a>

```python
ocpu_per_hour_by_subscription: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_per_hour`<sup>Required</sup> <a name="total_per_hour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour"></a>

```python
total_per_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_per_hour_by_subscription`<sup>Required</sup> <a name="total_per_hour_by_subscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription"></a>

```python
total_per_hour_by_subscription: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour">total_per_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription">total_per_hour_by_subscription</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `total_per_hour`<sup>Required</sup> <a name="total_per_hour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour"></a>

```python
total_per_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_per_hour_by_subscription`<sup>Required</sup> <a name="total_per_hour_by_subscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription"></a>

```python
total_per_hour_by_subscription: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage">os_image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage">storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth">total_estimation_per_month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription">total_estimation_per_month_by_subscription</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute`<sup>Required</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute"></a>

```python
compute: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList</a>

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `os_image`<sup>Required</sup> <a name="os_image" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage"></a>

```python
os_image: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage"></a>

```python
storage: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList</a>

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `total_estimation_per_month`<sup>Required</sup> <a name="total_estimation_per_month" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth"></a>

```python
total_estimation_per_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_estimation_per_month_by_subscription`<sup>Required</sup> <a name="total_estimation_per_month_by_subscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription"></a>

```python
total_estimation_per_month_by_subscription: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth">total_gb_per_month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription">total_gb_per_month_by_subscription</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes">volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `total_gb_per_month`<sup>Required</sup> <a name="total_gb_per_month" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth"></a>

```python
total_gb_per_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_gb_per_month_by_subscription`<sup>Required</sup> <a name="total_gb_per_month_by_subscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription"></a>

```python
total_gb_per_month_by_subscription: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes"></a>

```python
volumes: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb">capacity_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth">total_gb_per_month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription">total_gb_per_month_by_subscription</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_gb`<sup>Required</sup> <a name="capacity_gb" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb"></a>

```python
capacity_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `total_gb_per_month`<sup>Required</sup> <a name="total_gb_per_month" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth"></a>

```python
total_gb_per_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_gb_per_month_by_subscription`<sup>Required</sup> <a name="total_gb_per_month_by_subscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription"></a>

```python
total_gb_per_month_by_subscription: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.calculatedLimits">calculated_limits</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationId">migration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationPlanStats">migration_plan_stats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.referenceToRmsStack">reference_to_rms_stack</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.sourceMigrationPlanId">source_migration_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.strategies">strategies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.targetEnvironments">target_environments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `calculated_limits`<sup>Required</sup> <a name="calculated_limits" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.calculatedLimits"></a>

```python
calculated_limits: StringMap
```

- *Type:* cdktf.StringMap

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `migration_id`<sup>Required</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationId"></a>

```python
migration_id: str
```

- *Type:* str

---

##### `migration_plan_stats`<sup>Required</sup> <a name="migration_plan_stats" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationPlanStats"></a>

```python
migration_plan_stats: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList</a>

---

##### `reference_to_rms_stack`<sup>Required</sup> <a name="reference_to_rms_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.referenceToRmsStack"></a>

```python
reference_to_rms_stack: str
```

- *Type:* str

---

##### `source_migration_plan_id`<sup>Required</sup> <a name="source_migration_plan_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.sourceMigrationPlanId"></a>

```python
source_migration_plan_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `strategies`<sup>Required</sup> <a name="strategies" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.strategies"></a>

```python
strategies: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_environments`<sup>Required</sup> <a name="target_environments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.targetEnvironments"></a>

```python
target_environments: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.adjustmentMultiplier">adjustment_multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricTimeWindow">metric_time_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.percentile">percentile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.strategyType">strategy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `adjustment_multiplier`<sup>Required</sup> <a name="adjustment_multiplier" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.adjustmentMultiplier"></a>

```python
adjustment_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_time_window`<sup>Required</sup> <a name="metric_time_window" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricTimeWindow"></a>

```python
metric_time_window: str
```

- *Type:* str

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `percentile`<sup>Required</sup> <a name="percentile" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.percentile"></a>

```python
percentile: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `strategy_type`<sup>Required</sup> <a name="strategy_type" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.strategyType"></a>

```python
strategy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.dedicatedVmHost">dedicated_vm_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.msLicense">ms_license</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.preferredShapeType">preferred_shape_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.subnet">subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetCompartmentId">target_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetEnvironmentType">target_environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.vcn">vcn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `dedicated_vm_host`<sup>Required</sup> <a name="dedicated_vm_host" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.dedicatedVmHost"></a>

```python
dedicated_vm_host: str
```

- *Type:* str

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `ms_license`<sup>Required</sup> <a name="ms_license" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.msLicense"></a>

```python
ms_license: str
```

- *Type:* str

---

##### `preferred_shape_type`<sup>Required</sup> <a name="preferred_shape_type" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.preferredShapeType"></a>

```python
preferred_shape_type: str
```

- *Type:* str

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

---

##### `target_compartment_id`<sup>Required</sup> <a name="target_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetCompartmentId"></a>

```python
target_compartment_id: str
```

- *Type:* str

---

##### `target_environment_type`<sup>Required</sup> <a name="target_environment_type" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetEnvironmentType"></a>

```python
target_environment_type: str
```

- *Type:* str

---

##### `vcn`<sup>Required</sup> <a name="vcn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.vcn"></a>

```python
vcn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plans

dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection">DataOciCloudMigrationsMigrationPlansMigrationPlanCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.items"></a>

```python
items: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection">DataOciCloudMigrationsMigrationPlansMigrationPlanCollection</a>

---



