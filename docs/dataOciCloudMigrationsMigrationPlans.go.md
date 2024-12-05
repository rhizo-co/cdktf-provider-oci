# `dataOciCloudMigrationsMigrationPlans` Submodule <a name="`dataOciCloudMigrationsMigrationPlans` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationPlans <a name="DataOciCloudMigrationsMigrationPlans" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans oci_cloud_migrations_migration_plans}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlans(scope Construct, id *string, config DataOciCloudMigrationsMigrationPlansConfig) DataOciCloudMigrationsMigrationPlans
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig">DataOciCloudMigrationsMigrationPlansConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig">DataOciCloudMigrationsMigrationPlansConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationId">ResetMigrationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationPlanId">ResetMigrationPlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetId"></a>

```go
func ResetId()
```

##### `ResetMigrationId` <a name="ResetMigrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationId"></a>

```go
func ResetMigrationId()
```

##### `ResetMigrationPlanId` <a name="ResetMigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetMigrationPlanId"></a>

```go
func ResetMigrationPlanId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlans resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlans_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlans_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlans_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlans_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlans resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCloudMigrationsMigrationPlans to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCloudMigrationsMigrationPlans that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationPlans to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList">DataOciCloudMigrationsMigrationPlansFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanCollection">MigrationPlanCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationIdInput">MigrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanIdInput">MigrationPlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationId">MigrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanId">MigrationPlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filter"></a>

```go
func Filter() DataOciCloudMigrationsMigrationPlansFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList">DataOciCloudMigrationsMigrationPlansFilterList</a>

---

##### `MigrationPlanCollection`<sup>Required</sup> <a name="MigrationPlanCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanCollection"></a>

```go
func MigrationPlanCollection() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MigrationIdInput`<sup>Optional</sup> <a name="MigrationIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationIdInput"></a>

```go
func MigrationIdInput() *string
```

- *Type:* *string

---

##### `MigrationPlanIdInput`<sup>Optional</sup> <a name="MigrationPlanIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanIdInput"></a>

```go
func MigrationPlanIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MigrationId`<sup>Required</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationId"></a>

```go
func MigrationId() *string
```

- *Type:* *string

---

##### `MigrationPlanId`<sup>Required</sup> <a name="MigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.migrationPlanId"></a>

```go
func MigrationPlanId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlans.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationPlansConfig <a name="DataOciCloudMigrationsMigrationPlansConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

&dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlansConfig {
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
	MigrationId: *string,
	MigrationPlanId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#compartment_id DataOciCloudMigrationsMigrationPlans#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#display_name DataOciCloudMigrationsMigrationPlans#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#id DataOciCloudMigrationsMigrationPlans#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationId">MigrationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_id DataOciCloudMigrationsMigrationPlans#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationPlanId">MigrationPlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_plan_id DataOciCloudMigrationsMigrationPlans#migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#state DataOciCloudMigrationsMigrationPlans#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#compartment_id DataOciCloudMigrationsMigrationPlans#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#display_name DataOciCloudMigrationsMigrationPlans#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#filter DataOciCloudMigrationsMigrationPlans#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#id DataOciCloudMigrationsMigrationPlans#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MigrationId`<sup>Optional</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationId"></a>

```go
MigrationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_id DataOciCloudMigrationsMigrationPlans#migration_id}.

---

##### `MigrationPlanId`<sup>Optional</sup> <a name="MigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.migrationPlanId"></a>

```go
MigrationPlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#migration_plan_id DataOciCloudMigrationsMigrationPlans#migration_plan_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#state DataOciCloudMigrationsMigrationPlans#state}.

---

### DataOciCloudMigrationsMigrationPlansFilter <a name="DataOciCloudMigrationsMigrationPlansFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

&dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlansFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#name DataOciCloudMigrationsMigrationPlans#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#values DataOciCloudMigrationsMigrationPlans#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#regex DataOciCloudMigrationsMigrationPlans#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#name DataOciCloudMigrationsMigrationPlans#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#values DataOciCloudMigrationsMigrationPlans#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plans#regex DataOciCloudMigrationsMigrationPlans#regex}.

---

### DataOciCloudMigrationsMigrationPlansMigrationPlanCollection <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

&dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection {

}
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

&dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems {

}
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

&dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats {

}
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

&dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost {

}
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

&dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute {

}
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

&dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage {

}
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

&dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage {

}
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

&dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes {

}
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

&dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies {

}
```


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

&dataocicloudmigrationsmigrationplans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsMigrationPlansFilterList <a name="DataOciCloudMigrationsMigrationPlansFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsMigrationPlansFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsMigrationPlansFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCloudMigrationsMigrationPlansFilterOutputReference <a name="DataOciCloudMigrationsMigrationPlansFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsMigrationPlansFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.totalEstimatedCost">TotalEstimatedCost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.vmCount">VmCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TotalEstimatedCost`<sup>Required</sup> <a name="TotalEstimatedCost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.totalEstimatedCost"></a>

```go
func TotalEstimatedCost() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList</a>

---

##### `VmCount`<sup>Required</sup> <a name="VmCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.vmCount"></a>

```go
func VmCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount">GpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour">GpuPerHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription">GpuPerHourBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb">MemoryAmountGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour">MemoryGbPerHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription">MemoryGbPerHourBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount">OcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour">OcpuPerHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription">OcpuPerHourBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour">TotalPerHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription">TotalPerHourBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GpuCount`<sup>Required</sup> <a name="GpuCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount"></a>

```go
func GpuCount() *f64
```

- *Type:* *f64

---

##### `GpuPerHour`<sup>Required</sup> <a name="GpuPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour"></a>

```go
func GpuPerHour() *f64
```

- *Type:* *f64

---

##### `GpuPerHourBySubscription`<sup>Required</sup> <a name="GpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription"></a>

```go
func GpuPerHourBySubscription() *f64
```

- *Type:* *f64

---

##### `MemoryAmountGb`<sup>Required</sup> <a name="MemoryAmountGb" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb"></a>

```go
func MemoryAmountGb() *f64
```

- *Type:* *f64

---

##### `MemoryGbPerHour`<sup>Required</sup> <a name="MemoryGbPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour"></a>

```go
func MemoryGbPerHour() *f64
```

- *Type:* *f64

---

##### `MemoryGbPerHourBySubscription`<sup>Required</sup> <a name="MemoryGbPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription"></a>

```go
func MemoryGbPerHourBySubscription() *f64
```

- *Type:* *f64

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount"></a>

```go
func OcpuCount() *f64
```

- *Type:* *f64

---

##### `OcpuPerHour`<sup>Required</sup> <a name="OcpuPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour"></a>

```go
func OcpuPerHour() *f64
```

- *Type:* *f64

---

##### `OcpuPerHourBySubscription`<sup>Required</sup> <a name="OcpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription"></a>

```go
func OcpuPerHourBySubscription() *f64
```

- *Type:* *f64

---

##### `TotalPerHour`<sup>Required</sup> <a name="TotalPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour"></a>

```go
func TotalPerHour() *f64
```

- *Type:* *f64

---

##### `TotalPerHourBySubscription`<sup>Required</sup> <a name="TotalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription"></a>

```go
func TotalPerHourBySubscription() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour">TotalPerHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription">TotalPerHourBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TotalPerHour`<sup>Required</sup> <a name="TotalPerHour" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour"></a>

```go
func TotalPerHour() *f64
```

- *Type:* *f64

---

##### `TotalPerHourBySubscription`<sup>Required</sup> <a name="TotalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription"></a>

```go
func TotalPerHourBySubscription() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute">Compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage">OsImage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage">Storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth">TotalEstimationPerMonth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription">TotalEstimationPerMonthBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute"></a>

```go
func Compute() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList</a>

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `OsImage`<sup>Required</sup> <a name="OsImage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage"></a>

```go
func OsImage() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage"></a>

```go
func Storage() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList</a>

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TotalEstimationPerMonth`<sup>Required</sup> <a name="TotalEstimationPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth"></a>

```go
func TotalEstimationPerMonth() *f64
```

- *Type:* *f64

---

##### `TotalEstimationPerMonthBySubscription`<sup>Required</sup> <a name="TotalEstimationPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription"></a>

```go
func TotalEstimationPerMonthBySubscription() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth">TotalGbPerMonth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription">TotalGbPerMonthBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes">Volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TotalGbPerMonth`<sup>Required</sup> <a name="TotalGbPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth"></a>

```go
func TotalGbPerMonth() *f64
```

- *Type:* *f64

---

##### `TotalGbPerMonthBySubscription`<sup>Required</sup> <a name="TotalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription"></a>

```go
func TotalGbPerMonthBySubscription() *f64
```

- *Type:* *f64

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes"></a>

```go
func Volumes() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb">CapacityGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth">TotalGbPerMonth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription">TotalGbPerMonthBySubscription</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb"></a>

```go
func CapacityGb() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `TotalGbPerMonth`<sup>Required</sup> <a name="TotalGbPerMonth" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth"></a>

```go
func TotalGbPerMonth() *f64
```

- *Type:* *f64

---

##### `TotalGbPerMonthBySubscription`<sup>Required</sup> <a name="TotalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription"></a>

```go
func TotalGbPerMonthBySubscription() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.calculatedLimits">CalculatedLimits</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationId">MigrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationPlanStats">MigrationPlanStats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.referenceToRmsStack">ReferenceToRmsStack</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.sourceMigrationPlanId">SourceMigrationPlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.strategies">Strategies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.targetEnvironments">TargetEnvironments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CalculatedLimits`<sup>Required</sup> <a name="CalculatedLimits" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.calculatedLimits"></a>

```go
func CalculatedLimits() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MigrationId`<sup>Required</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationId"></a>

```go
func MigrationId() *string
```

- *Type:* *string

---

##### `MigrationPlanStats`<sup>Required</sup> <a name="MigrationPlanStats" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.migrationPlanStats"></a>

```go
func MigrationPlanStats() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList</a>

---

##### `ReferenceToRmsStack`<sup>Required</sup> <a name="ReferenceToRmsStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.referenceToRmsStack"></a>

```go
func ReferenceToRmsStack() *string
```

- *Type:* *string

---

##### `SourceMigrationPlanId`<sup>Required</sup> <a name="SourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.sourceMigrationPlanId"></a>

```go
func SourceMigrationPlanId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Strategies`<sup>Required</sup> <a name="Strategies" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.strategies"></a>

```go
func Strategies() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetEnvironments`<sup>Required</sup> <a name="TargetEnvironments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.targetEnvironments"></a>

```go
func TargetEnvironments() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.adjustmentMultiplier">AdjustmentMultiplier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricTimeWindow">MetricTimeWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.percentile">Percentile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.strategyType">StrategyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdjustmentMultiplier`<sup>Required</sup> <a name="AdjustmentMultiplier" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.adjustmentMultiplier"></a>

```go
func AdjustmentMultiplier() *f64
```

- *Type:* *f64

---

##### `MetricTimeWindow`<sup>Required</sup> <a name="MetricTimeWindow" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricTimeWindow"></a>

```go
func MetricTimeWindow() *string
```

- *Type:* *string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `Percentile`<sup>Required</sup> <a name="Percentile" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.percentile"></a>

```go
func Percentile() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.strategyType"></a>

```go
func StrategyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.dedicatedVmHost">DedicatedVmHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.msLicense">MsLicense</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.preferredShapeType">PreferredShapeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.subnet">Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetCompartmentId">TargetCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetEnvironmentType">TargetEnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.vcn">Vcn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `DedicatedVmHost`<sup>Required</sup> <a name="DedicatedVmHost" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.dedicatedVmHost"></a>

```go
func DedicatedVmHost() *string
```

- *Type:* *string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `MsLicense`<sup>Required</sup> <a name="MsLicense" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.msLicense"></a>

```go
func MsLicense() *string
```

- *Type:* *string

---

##### `PreferredShapeType`<sup>Required</sup> <a name="PreferredShapeType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.preferredShapeType"></a>

```go
func PreferredShapeType() *string
```

- *Type:* *string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.subnet"></a>

```go
func Subnet() *string
```

- *Type:* *string

---

##### `TargetCompartmentId`<sup>Required</sup> <a name="TargetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetCompartmentId"></a>

```go
func TargetCompartmentId() *string
```

- *Type:* *string

---

##### `TargetEnvironmentType`<sup>Required</sup> <a name="TargetEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.targetEnvironmentType"></a>

```go
func TargetEnvironmentType() *string
```

- *Type:* *string

---

##### `Vcn`<sup>Required</sup> <a name="Vcn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.vcn"></a>

```go
func Vcn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments</a>

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference <a name="DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplans"

dataocicloudmigrationsmigrationplans.NewDataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection">DataOciCloudMigrationsMigrationPlansMigrationPlanCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList">DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudMigrationsMigrationPlansMigrationPlanCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlans.DataOciCloudMigrationsMigrationPlansMigrationPlanCollection">DataOciCloudMigrationsMigrationPlansMigrationPlanCollection</a>

---



