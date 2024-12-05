# `dataOciCloudMigrationsMigrationPlanAvailableShape` Submodule <a name="`dataOciCloudMigrationsMigrationPlanAvailableShape` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShape <a name="DataOciCloudMigrationsMigrationPlanAvailableShape" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape oci_cloud_migrations_migration_plan_available_shape}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplanavailableshape"

dataocicloudmigrationsmigrationplanavailableshape.NewDataOciCloudMigrationsMigrationPlanAvailableShape(scope Construct, id *string, config DataOciCloudMigrationsMigrationPlanAvailableShapeConfig) DataOciCloudMigrationsMigrationPlanAvailableShape
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig">DataOciCloudMigrationsMigrationPlanAvailableShapeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig">DataOciCloudMigrationsMigrationPlanAvailableShapeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetDvhHostId">ResetDvhHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetReservedCapacityId">ResetReservedCapacityId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDvhHostId` <a name="ResetDvhHostId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetDvhHostId"></a>

```go
func ResetDvhHostId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetId"></a>

```go
func ResetId()
```

##### `ResetReservedCapacityId` <a name="ResetReservedCapacityId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.resetReservedCapacityId"></a>

```go
func ResetReservedCapacityId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlanAvailableShape resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplanavailableshape"

dataocicloudmigrationsmigrationplanavailableshape.DataOciCloudMigrationsMigrationPlanAvailableShape_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplanavailableshape"

dataocicloudmigrationsmigrationplanavailableshape.DataOciCloudMigrationsMigrationPlanAvailableShape_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplanavailableshape"

dataocicloudmigrationsmigrationplanavailableshape.DataOciCloudMigrationsMigrationPlanAvailableShape_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplanavailableshape"

dataocicloudmigrationsmigrationplanavailableshape.DataOciCloudMigrationsMigrationPlanAvailableShape_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlanAvailableShape resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCloudMigrationsMigrationPlanAvailableShape to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCloudMigrationsMigrationPlanAvailableShape that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationPlanAvailableShape to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList">DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.dvhHostIdInput">DvhHostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.migrationPlanIdInput">MigrationPlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.reservedCapacityIdInput">ReservedCapacityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.dvhHostId">DvhHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.migrationPlanId">MigrationPlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.reservedCapacityId">ReservedCapacityId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.items"></a>

```go
func Items() DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList">DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DvhHostIdInput`<sup>Optional</sup> <a name="DvhHostIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.dvhHostIdInput"></a>

```go
func DvhHostIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MigrationPlanIdInput`<sup>Optional</sup> <a name="MigrationPlanIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.migrationPlanIdInput"></a>

```go
func MigrationPlanIdInput() *string
```

- *Type:* *string

---

##### `ReservedCapacityIdInput`<sup>Optional</sup> <a name="ReservedCapacityIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.reservedCapacityIdInput"></a>

```go
func ReservedCapacityIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DvhHostId`<sup>Required</sup> <a name="DvhHostId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.dvhHostId"></a>

```go
func DvhHostId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MigrationPlanId`<sup>Required</sup> <a name="MigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.migrationPlanId"></a>

```go
func MigrationPlanId() *string
```

- *Type:* *string

---

##### `ReservedCapacityId`<sup>Required</sup> <a name="ReservedCapacityId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.reservedCapacityId"></a>

```go
func ReservedCapacityId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShape.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShapeConfig <a name="DataOciCloudMigrationsMigrationPlanAvailableShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplanavailableshape"

&dataocicloudmigrationsmigrationplanavailableshape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MigrationPlanId: *string,
	AvailabilityDomain: *string,
	CompartmentId: *string,
	DvhHostId: *string,
	Id: *string,
	ReservedCapacityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.migrationPlanId">MigrationPlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShape#migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShape#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShape#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.dvhHostId">DvhHostId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShape#dvh_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#id DataOciCloudMigrationsMigrationPlanAvailableShape#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.reservedCapacityId">ReservedCapacityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShape#reserved_capacity_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MigrationPlanId`<sup>Required</sup> <a name="MigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.migrationPlanId"></a>

```go
MigrationPlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShape#migration_plan_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShape#availability_domain}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShape#compartment_id}.

---

##### `DvhHostId`<sup>Optional</sup> <a name="DvhHostId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.dvhHostId"></a>

```go
DvhHostId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShape#dvh_host_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#id DataOciCloudMigrationsMigrationPlanAvailableShape#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReservedCapacityId`<sup>Optional</sup> <a name="ReservedCapacityId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeConfig.property.reservedCapacityId"></a>

```go
ReservedCapacityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shape#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShape#reserved_capacity_id}.

---

### DataOciCloudMigrationsMigrationPlanAvailableShapeItems <a name="DataOciCloudMigrationsMigrationPlanAvailableShapeItems" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplanavailableshape"

&dataocicloudmigrationsmigrationplanavailableshape.DataOciCloudMigrationsMigrationPlanAvailableShapeItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList <a name="DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplanavailableshape"

dataocicloudmigrationsmigrationplanavailableshape.NewDataOciCloudMigrationsMigrationPlanAvailableShapeItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.get"></a>

```go
func Get(index *f64) DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference <a name="DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudmigrationsmigrationplanavailableshape"

dataocicloudmigrationsmigrationplanavailableshape.NewDataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.gpuDescription">GpuDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.gpus">Gpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.localDiskDescription">LocalDiskDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.localDisks">LocalDisks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.localDisksTotalSizeInGbs">LocalDisksTotalSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.maxVnicAttachments">MaxVnicAttachments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.minTotalBaselineOcpusRequired">MinTotalBaselineOcpusRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.networkingBandwidthInGbps">NetworkingBandwidthInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.paginationToken">PaginationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.processorDescription">ProcessorDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItems">DataOciCloudMigrationsMigrationPlanAvailableShapeItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GpuDescription`<sup>Required</sup> <a name="GpuDescription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.gpuDescription"></a>

```go
func GpuDescription() *string
```

- *Type:* *string

---

##### `Gpus`<sup>Required</sup> <a name="Gpus" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.gpus"></a>

```go
func Gpus() *f64
```

- *Type:* *f64

---

##### `LocalDiskDescription`<sup>Required</sup> <a name="LocalDiskDescription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.localDiskDescription"></a>

```go
func LocalDiskDescription() *string
```

- *Type:* *string

---

##### `LocalDisks`<sup>Required</sup> <a name="LocalDisks" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.localDisks"></a>

```go
func LocalDisks() *f64
```

- *Type:* *f64

---

##### `LocalDisksTotalSizeInGbs`<sup>Required</sup> <a name="LocalDisksTotalSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.localDisksTotalSizeInGbs"></a>

```go
func LocalDisksTotalSizeInGbs() *f64
```

- *Type:* *f64

---

##### `MaxVnicAttachments`<sup>Required</sup> <a name="MaxVnicAttachments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.maxVnicAttachments"></a>

```go
func MaxVnicAttachments() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `MinTotalBaselineOcpusRequired`<sup>Required</sup> <a name="MinTotalBaselineOcpusRequired" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.minTotalBaselineOcpusRequired"></a>

```go
func MinTotalBaselineOcpusRequired() *f64
```

- *Type:* *f64

---

##### `NetworkingBandwidthInGbps`<sup>Required</sup> <a name="NetworkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.networkingBandwidthInGbps"></a>

```go
func NetworkingBandwidthInGbps() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `PaginationToken`<sup>Required</sup> <a name="PaginationToken" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.paginationToken"></a>

```go
func PaginationToken() *string
```

- *Type:* *string

---

##### `ProcessorDescription`<sup>Required</sup> <a name="ProcessorDescription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.processorDescription"></a>

```go
func ProcessorDescription() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudMigrationsMigrationPlanAvailableShapeItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShape.DataOciCloudMigrationsMigrationPlanAvailableShapeItems">DataOciCloudMigrationsMigrationPlanAvailableShapeItems</a>

---



