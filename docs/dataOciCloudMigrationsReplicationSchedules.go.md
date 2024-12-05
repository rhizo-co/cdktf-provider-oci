# `dataOciCloudMigrationsReplicationSchedules` Submodule <a name="`dataOciCloudMigrationsReplicationSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsReplicationSchedules <a name="DataOciCloudMigrationsReplicationSchedules" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules oci_cloud_migrations_replication_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

dataocicloudmigrationsreplicationschedules.NewDataOciCloudMigrationsReplicationSchedules(scope Construct, id *string, config DataOciCloudMigrationsReplicationSchedulesConfig) DataOciCloudMigrationsReplicationSchedules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig">DataOciCloudMigrationsReplicationSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig">DataOciCloudMigrationsReplicationSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetReplicationScheduleId">ResetReplicationScheduleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetId"></a>

```go
func ResetId()
```

##### `ResetReplicationScheduleId` <a name="ResetReplicationScheduleId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetReplicationScheduleId"></a>

```go
func ResetReplicationScheduleId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsReplicationSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

dataocicloudmigrationsreplicationschedules.DataOciCloudMigrationsReplicationSchedules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

dataocicloudmigrationsreplicationschedules.DataOciCloudMigrationsReplicationSchedules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

dataocicloudmigrationsreplicationschedules.DataOciCloudMigrationsReplicationSchedules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

dataocicloudmigrationsreplicationschedules.DataOciCloudMigrationsReplicationSchedules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCloudMigrationsReplicationSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCloudMigrationsReplicationSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCloudMigrationsReplicationSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsReplicationSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList">DataOciCloudMigrationsReplicationSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.replicationScheduleCollection">ReplicationScheduleCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.replicationScheduleIdInput">ReplicationScheduleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.replicationScheduleId">ReplicationScheduleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.filter"></a>

```go
func Filter() DataOciCloudMigrationsReplicationSchedulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList">DataOciCloudMigrationsReplicationSchedulesFilterList</a>

---

##### `ReplicationScheduleCollection`<sup>Required</sup> <a name="ReplicationScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.replicationScheduleCollection"></a>

```go
func ReplicationScheduleCollection() DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ReplicationScheduleIdInput`<sup>Optional</sup> <a name="ReplicationScheduleIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.replicationScheduleIdInput"></a>

```go
func ReplicationScheduleIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReplicationScheduleId`<sup>Required</sup> <a name="ReplicationScheduleId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.replicationScheduleId"></a>

```go
func ReplicationScheduleId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsReplicationSchedulesConfig <a name="DataOciCloudMigrationsReplicationSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

&dataocicloudmigrationsreplicationschedules.DataOciCloudMigrationsReplicationSchedulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	ReplicationScheduleId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#compartment_id DataOciCloudMigrationsReplicationSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#display_name DataOciCloudMigrationsReplicationSchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#id DataOciCloudMigrationsReplicationSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.replicationScheduleId">ReplicationScheduleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#replication_schedule_id DataOciCloudMigrationsReplicationSchedules#replication_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#state DataOciCloudMigrationsReplicationSchedules#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#compartment_id DataOciCloudMigrationsReplicationSchedules#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#display_name DataOciCloudMigrationsReplicationSchedules#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#filter DataOciCloudMigrationsReplicationSchedules#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#id DataOciCloudMigrationsReplicationSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReplicationScheduleId`<sup>Optional</sup> <a name="ReplicationScheduleId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.replicationScheduleId"></a>

```go
ReplicationScheduleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#replication_schedule_id DataOciCloudMigrationsReplicationSchedules#replication_schedule_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#state DataOciCloudMigrationsReplicationSchedules#state}.

---

### DataOciCloudMigrationsReplicationSchedulesFilter <a name="DataOciCloudMigrationsReplicationSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

&dataocicloudmigrationsreplicationschedules.DataOciCloudMigrationsReplicationSchedulesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#name DataOciCloudMigrationsReplicationSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#values DataOciCloudMigrationsReplicationSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#regex DataOciCloudMigrationsReplicationSchedules#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#name DataOciCloudMigrationsReplicationSchedules#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#values DataOciCloudMigrationsReplicationSchedules#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#regex DataOciCloudMigrationsReplicationSchedules#regex}.

---

### DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection <a name="DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

&dataocicloudmigrationsreplicationschedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection {

}
```


### DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems <a name="DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

&dataocicloudmigrationsreplicationschedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsReplicationSchedulesFilterList <a name="DataOciCloudMigrationsReplicationSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

dataocicloudmigrationsreplicationschedules.NewDataOciCloudMigrationsReplicationSchedulesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsReplicationSchedulesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsReplicationSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCloudMigrationsReplicationSchedulesFilterOutputReference <a name="DataOciCloudMigrationsReplicationSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

dataocicloudmigrationsreplicationschedules.NewDataOciCloudMigrationsReplicationSchedulesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsReplicationSchedulesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList <a name="DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

dataocicloudmigrationsreplicationschedules.NewDataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference <a name="DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

dataocicloudmigrationsreplicationschedules.NewDataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.executionRecurrences">ExecutionRecurrences</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecutionRecurrences`<sup>Required</sup> <a name="ExecutionRecurrences" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.executionRecurrences"></a>

```go
func ExecutionRecurrences() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems</a>

---


### DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList <a name="DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

dataocicloudmigrationsreplicationschedules.NewDataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference <a name="DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsreplicationschedules"

dataocicloudmigrationsreplicationschedules.NewDataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection</a>

---



