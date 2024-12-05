# `dataOciCloudMigrationsMigrationPlanAvailableShape` Submodule <a name="`dataOciCloudMigrationsMigrationPlanAvailableShape` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShape <a name="DataOciCloudMigrationsMigrationPlanAvailableShape" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape oci_cloud_migrations_migration_plan_available_shape}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shape

dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape(
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
  id: str = None,
  reserved_capacity_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.migrationPlanId">migration_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShape#migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShape#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShape#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.dvhHostId">dvh_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShape#dvh_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#id DataOciCloudMigrationsMigrationPlanAvailableShape#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.reservedCapacityId">reserved_capacity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShape#reserved_capacity_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `migration_plan_id`<sup>Required</sup> <a name="migration_plan_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.migrationPlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShape#migration_plan_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShape#availability_domain}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShape#compartment_id}.

---

##### `dvh_host_id`<sup>Optional</sup> <a name="dvh_host_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.dvhHostId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShape#dvh_host_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#id DataOciCloudMigrationsMigrationPlanAvailableShape#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reserved_capacity_id`<sup>Optional</sup> <a name="reserved_capacity_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.reservedCapacityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShape#reserved_capacity_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetDvhHostId">reset_dvh_host_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetReservedCapacityId">reset_reserved_capacity_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_dvh_host_id` <a name="reset_dvh_host_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetDvhHostId"></a>

```python
def reset_dvh_host_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_reserved_capacity_id` <a name="reset_reserved_capacity_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetReservedCapacityId"></a>

```python
def reset_reserved_capacity_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlanAvailableShape resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shape

dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shape

dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shape

dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shape

dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlanAvailableShape resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudMigrationsMigrationPlanAvailableShape to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudMigrationsMigrationPlanAvailableShape that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationPlanAvailableShape to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList">DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.dvhHostIdInput">dvh_host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.migrationPlanIdInput">migration_plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.reservedCapacityIdInput">reserved_capacity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.dvhHostId">dvh_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.migrationPlanId">migration_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.reservedCapacityId">reserved_capacity_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.items"></a>

```python
items: DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList">DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `dvh_host_id_input`<sup>Optional</sup> <a name="dvh_host_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.dvhHostIdInput"></a>

```python
dvh_host_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `migration_plan_id_input`<sup>Optional</sup> <a name="migration_plan_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.migrationPlanIdInput"></a>

```python
migration_plan_id_input: str
```

- *Type:* str

---

##### `reserved_capacity_id_input`<sup>Optional</sup> <a name="reserved_capacity_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.reservedCapacityIdInput"></a>

```python
reserved_capacity_id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `dvh_host_id`<sup>Required</sup> <a name="dvh_host_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.dvhHostId"></a>

```python
dvh_host_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `migration_plan_id`<sup>Required</sup> <a name="migration_plan_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.migrationPlanId"></a>

```python
migration_plan_id: str
```

- *Type:* str

---

##### `reserved_capacity_id`<sup>Required</sup> <a name="reserved_capacity_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.reservedCapacityId"></a>

```python
reserved_capacity_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShapeConfig <a name="DataOciCloudMigrationsMigrationPlanAvailableShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shape

dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig(
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
  id: str = None,
  reserved_capacity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.migrationPlanId">migration_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShape#migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShape#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShape#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.dvhHostId">dvh_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShape#dvh_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#id DataOciCloudMigrationsMigrationPlanAvailableShape#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.reservedCapacityId">reserved_capacity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShape#reserved_capacity_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `migration_plan_id`<sup>Required</sup> <a name="migration_plan_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.migrationPlanId"></a>

```python
migration_plan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShape#migration_plan_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShape#availability_domain}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShape#compartment_id}.

---

##### `dvh_host_id`<sup>Optional</sup> <a name="dvh_host_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.dvhHostId"></a>

```python
dvh_host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShape#dvh_host_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#id DataOciCloudMigrationsMigrationPlanAvailableShape#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reserved_capacity_id`<sup>Optional</sup> <a name="reserved_capacity_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.reservedCapacityId"></a>

```python
reserved_capacity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShape#reserved_capacity_id}.

---

### DataOciCloudMigrationsMigrationPlanAvailableShapeItems <a name="DataOciCloudMigrationsMigrationPlanAvailableShapeItems" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shape

dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList <a name="DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shape

dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference <a name="DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_migration_plan_available_shape

dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.gpuDescription">gpu_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.gpus">gpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.localDiskDescription">local_disk_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.localDisks">local_disks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.localDisksTotalSizeInGbs">local_disks_total_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.maxVnicAttachments">max_vnic_attachments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.minTotalBaselineOcpusRequired">min_total_baseline_ocpus_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.networkingBandwidthInGbps">networking_bandwidth_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.paginationToken">pagination_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.processorDescription">processor_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItems">DataOciCloudMigrationsMigrationPlanAvailableShapeItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gpu_description`<sup>Required</sup> <a name="gpu_description" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.gpuDescription"></a>

```python
gpu_description: str
```

- *Type:* str

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.gpus"></a>

```python
gpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_disk_description`<sup>Required</sup> <a name="local_disk_description" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.localDiskDescription"></a>

```python
local_disk_description: str
```

- *Type:* str

---

##### `local_disks`<sup>Required</sup> <a name="local_disks" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.localDisks"></a>

```python
local_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_disks_total_size_in_gbs`<sup>Required</sup> <a name="local_disks_total_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.localDisksTotalSizeInGbs"></a>

```python
local_disks_total_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vnic_attachments`<sup>Required</sup> <a name="max_vnic_attachments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.maxVnicAttachments"></a>

```python
max_vnic_attachments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_total_baseline_ocpus_required`<sup>Required</sup> <a name="min_total_baseline_ocpus_required" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.minTotalBaselineOcpusRequired"></a>

```python
min_total_baseline_ocpus_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `networking_bandwidth_in_gbps`<sup>Required</sup> <a name="networking_bandwidth_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.networkingBandwidthInGbps"></a>

```python
networking_bandwidth_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pagination_token`<sup>Required</sup> <a name="pagination_token" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.paginationToken"></a>

```python
pagination_token: str
```

- *Type:* str

---

##### `processor_description`<sup>Required</sup> <a name="processor_description" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.processorDescription"></a>

```python
processor_description: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsMigrationPlanAvailableShapeItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItems">DataOciCloudMigrationsMigrationPlanAvailableShapeItems</a>

---



