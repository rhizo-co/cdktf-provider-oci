# `dataOciCloudMigrationsMigrationPlanAvailableShapes` Submodule <a name="`dataOciCloudMigrationsMigrationPlanAvailableShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShapes <a name="DataOciCloudMigrationsMigrationPlanAvailableShapes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes oci_cloud_migrations_migration_plan_available_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  migration_plan_id: str,
  availability_domain: str = None,
  compartment_id: str = None,
  dvh_host_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationPlanAvailableShapesFilter]] = None,
  id: str = None,
  reserved_capacity_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.migrationPlanId">migration_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShapes#migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.dvhHostId">dvh_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShapes#dvh_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#id DataOciCloudMigrationsMigrationPlanAvailableShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.reservedCapacityId">reserved_capacity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShapes#reserved_capacity_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `migration_plan_id`<sup>Required</sup> <a name="migration_plan_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.migrationPlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShapes#migration_plan_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShapes#availability_domain}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShapes#compartment_id}.

---

##### `dvh_host_id`<sup>Optional</sup> <a name="dvh_host_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.dvhHostId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShapes#dvh_host_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#filter DataOciCloudMigrationsMigrationPlanAvailableShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#id DataOciCloudMigrationsMigrationPlanAvailableShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reserved_capacity_id`<sup>Optional</sup> <a name="reserved_capacity_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.reservedCapacityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShapes#reserved_capacity_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetDvhHostId">reset_dvh_host_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetReservedCapacityId">reset_reserved_capacity_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationPlanAvailableShapesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_dvh_host_id` <a name="reset_dvh_host_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetDvhHostId"></a>

```python
def reset_dvh_host_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_reserved_capacity_id` <a name="reset_reserved_capacity_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetReservedCapacityId"></a>

```python
def reset_reserved_capacity_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlanAvailableShapes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlanAvailableShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudMigrationsMigrationPlanAvailableShapes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudMigrationsMigrationPlanAvailableShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationPlanAvailableShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availableShapesCollection">available_shapes_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList">DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dvhHostIdInput">dvh_host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.migrationPlanIdInput">migration_plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.reservedCapacityIdInput">reserved_capacity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dvhHostId">dvh_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.migrationPlanId">migration_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.reservedCapacityId">reserved_capacity_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `available_shapes_collection`<sup>Required</sup> <a name="available_shapes_collection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availableShapesCollection"></a>

```python
available_shapes_collection: DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.filter"></a>

```python
filter: DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList">DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `dvh_host_id_input`<sup>Optional</sup> <a name="dvh_host_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dvhHostIdInput"></a>

```python
dvh_host_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationPlanAvailableShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `migration_plan_id_input`<sup>Optional</sup> <a name="migration_plan_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.migrationPlanIdInput"></a>

```python
migration_plan_id_input: str
```

- *Type:* str

---

##### `reserved_capacity_id_input`<sup>Optional</sup> <a name="reserved_capacity_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.reservedCapacityIdInput"></a>

```python
reserved_capacity_id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `dvh_host_id`<sup>Required</sup> <a name="dvh_host_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dvhHostId"></a>

```python
dvh_host_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `migration_plan_id`<sup>Required</sup> <a name="migration_plan_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.migrationPlanId"></a>

```python
migration_plan_id: str
```

- *Type:* str

---

##### `reserved_capacity_id`<sup>Required</sup> <a name="reserved_capacity_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.reservedCapacityId"></a>

```python
reserved_capacity_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection()
```


### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems()
```


### DataOciCloudMigrationsMigrationPlanAvailableShapesConfig <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  migration_plan_id: str,
  availability_domain: str = None,
  compartment_id: str = None,
  dvh_host_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationPlanAvailableShapesFilter]] = None,
  id: str = None,
  reserved_capacity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.migrationPlanId">migration_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShapes#migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.dvhHostId">dvh_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShapes#dvh_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#id DataOciCloudMigrationsMigrationPlanAvailableShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.reservedCapacityId">reserved_capacity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShapes#reserved_capacity_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `migration_plan_id`<sup>Required</sup> <a name="migration_plan_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.migrationPlanId"></a>

```python
migration_plan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShapes#migration_plan_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShapes#availability_domain}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShapes#compartment_id}.

---

##### `dvh_host_id`<sup>Optional</sup> <a name="dvh_host_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.dvhHostId"></a>

```python
dvh_host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShapes#dvh_host_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationPlanAvailableShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#filter DataOciCloudMigrationsMigrationPlanAvailableShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#id DataOciCloudMigrationsMigrationPlanAvailableShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reserved_capacity_id`<sup>Optional</sup> <a name="reserved_capacity_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.reservedCapacityId"></a>

```python
reserved_capacity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShapes#reserved_capacity_id}.

---

### DataOciCloudMigrationsMigrationPlanAvailableShapesFilter <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#name DataOciCloudMigrationsMigrationPlanAvailableShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#values DataOciCloudMigrationsMigrationPlanAvailableShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#regex DataOciCloudMigrationsMigrationPlanAvailableShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#name DataOciCloudMigrationsMigrationPlanAvailableShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#values DataOciCloudMigrationsMigrationPlanAvailableShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#regex DataOciCloudMigrationsMigrationPlanAvailableShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.gpuDescription">gpu_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.gpus">gpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDiskDescription">local_disk_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDisks">local_disks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDisksTotalSizeInGbs">local_disks_total_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.maxVnicAttachments">max_vnic_attachments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.minTotalBaselineOcpusRequired">min_total_baseline_ocpus_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.networkingBandwidthInGbps">networking_bandwidth_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.paginationToken">pagination_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.processorDescription">processor_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gpu_description`<sup>Required</sup> <a name="gpu_description" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.gpuDescription"></a>

```python
gpu_description: str
```

- *Type:* str

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.gpus"></a>

```python
gpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_disk_description`<sup>Required</sup> <a name="local_disk_description" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDiskDescription"></a>

```python
local_disk_description: str
```

- *Type:* str

---

##### `local_disks`<sup>Required</sup> <a name="local_disks" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDisks"></a>

```python
local_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_disks_total_size_in_gbs`<sup>Required</sup> <a name="local_disks_total_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDisksTotalSizeInGbs"></a>

```python
local_disks_total_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vnic_attachments`<sup>Required</sup> <a name="max_vnic_attachments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.maxVnicAttachments"></a>

```python
max_vnic_attachments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_total_baseline_ocpus_required`<sup>Required</sup> <a name="min_total_baseline_ocpus_required" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.minTotalBaselineOcpusRequired"></a>

```python
min_total_baseline_ocpus_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `networking_bandwidth_in_gbps`<sup>Required</sup> <a name="networking_bandwidth_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.networkingBandwidthInGbps"></a>

```python
networking_bandwidth_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pagination_token`<sup>Required</sup> <a name="pagination_token" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.paginationToken"></a>

```python
pagination_token: str
```

- *Type:* str

---

##### `processor_description`<sup>Required</sup> <a name="processor_description" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.processorDescription"></a>

```python
processor_description: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems</a>

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.items"></a>

```python
items: DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection</a>

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsMigrationPlanAvailableShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>]]

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shapes

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCloudMigrationsMigrationPlanAvailableShapesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>]

---



