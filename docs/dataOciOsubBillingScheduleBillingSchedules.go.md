# `dataOciOsubBillingScheduleBillingSchedules` Submodule <a name="`dataOciOsubBillingScheduleBillingSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubBillingScheduleBillingSchedules <a name="DataOciOsubBillingScheduleBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules oci_osub_billing_schedule_billing_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

dataociosubbillingschedulebillingschedules.NewDataOciOsubBillingScheduleBillingSchedules(scope Construct, id *string, config DataOciOsubBillingScheduleBillingSchedulesConfig) DataOciOsubBillingScheduleBillingSchedules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig">DataOciOsubBillingScheduleBillingSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig">DataOciOsubBillingScheduleBillingSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetSubscribedServiceId">ResetSubscribedServiceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetXOneOriginRegion">ResetXOneOriginRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetId"></a>

```go
func ResetId()
```

##### `ResetSubscribedServiceId` <a name="ResetSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetSubscribedServiceId"></a>

```go
func ResetSubscribedServiceId()
```

##### `ResetXOneOriginRegion` <a name="ResetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetXOneOriginRegion"></a>

```go
func ResetXOneOriginRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubBillingScheduleBillingSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

dataociosubbillingschedulebillingschedules.DataOciOsubBillingScheduleBillingSchedules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

dataociosubbillingschedulebillingschedules.DataOciOsubBillingScheduleBillingSchedules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

dataociosubbillingschedulebillingschedules.DataOciOsubBillingScheduleBillingSchedules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

dataociosubbillingschedulebillingschedules.DataOciOsubBillingScheduleBillingSchedules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsubBillingScheduleBillingSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsubBillingScheduleBillingSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsubBillingScheduleBillingSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubBillingScheduleBillingSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.billingSchedules">BillingSchedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList">DataOciOsubBillingScheduleBillingSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceIdInput">SubscribedServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegionInput">XOneOriginRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceId">SubscribedServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BillingSchedules`<sup>Required</sup> <a name="BillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.billingSchedules"></a>

```go
func BillingSchedules() DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filter"></a>

```go
func Filter() DataOciOsubBillingScheduleBillingSchedulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList">DataOciOsubBillingScheduleBillingSchedulesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SubscribedServiceIdInput`<sup>Optional</sup> <a name="SubscribedServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceIdInput"></a>

```go
func SubscribedServiceIdInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `XOneOriginRegionInput`<sup>Optional</sup> <a name="XOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegionInput"></a>

```go
func XOneOriginRegionInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SubscribedServiceId`<sup>Required</sup> <a name="SubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceId"></a>

```go
func SubscribedServiceId() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `XOneOriginRegion`<sup>Required</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegion"></a>

```go
func XOneOriginRegion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubBillingScheduleBillingSchedulesBillingSchedules <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

&dataociosubbillingschedulebillingschedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules {

}
```


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

&dataociosubbillingschedulebillingschedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct {

}
```


### DataOciOsubBillingScheduleBillingSchedulesConfig <a name="DataOciOsubBillingScheduleBillingSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

&dataociosubbillingschedulebillingschedules.DataOciOsubBillingScheduleBillingSchedulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	SubscriptionId: *string,
	Filter: interface{},
	Id: *string,
	SubscribedServiceId: *string,
	XOneOriginRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#compartment_id DataOciOsubBillingScheduleBillingSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscription_id DataOciOsubBillingScheduleBillingSchedules#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#id DataOciOsubBillingScheduleBillingSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscribedServiceId">SubscribedServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscribed_service_id DataOciOsubBillingScheduleBillingSchedules#subscribed_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#x_one_origin_region DataOciOsubBillingScheduleBillingSchedules#x_one_origin_region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#compartment_id DataOciOsubBillingScheduleBillingSchedules#compartment_id}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscription_id DataOciOsubBillingScheduleBillingSchedules#subscription_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#filter DataOciOsubBillingScheduleBillingSchedules#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#id DataOciOsubBillingScheduleBillingSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SubscribedServiceId`<sup>Optional</sup> <a name="SubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscribedServiceId"></a>

```go
SubscribedServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscribed_service_id DataOciOsubBillingScheduleBillingSchedules#subscribed_service_id}.

---

##### `XOneOriginRegion`<sup>Optional</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.xOneOriginRegion"></a>

```go
XOneOriginRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#x_one_origin_region DataOciOsubBillingScheduleBillingSchedules#x_one_origin_region}.

---

### DataOciOsubBillingScheduleBillingSchedulesFilter <a name="DataOciOsubBillingScheduleBillingSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

&dataociosubbillingschedulebillingschedules.DataOciOsubBillingScheduleBillingSchedulesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#name DataOciOsubBillingScheduleBillingSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#values DataOciOsubBillingScheduleBillingSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#regex DataOciOsubBillingScheduleBillingSchedules#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#name DataOciOsubBillingScheduleBillingSchedules#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#values DataOciOsubBillingScheduleBillingSchedules#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#regex DataOciOsubBillingScheduleBillingSchedules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

dataociosubbillingschedulebillingschedules.NewDataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.get"></a>

```go
func Get(index *f64) DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

dataociosubbillingschedulebillingschedules.NewDataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.amount">Amount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId">ArCustomerTransactionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber">ArInvoiceNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency">BillingFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus">InvoiceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.orderNumber">OrderNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.quantity">Quantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing">TimeInvoicing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules">DataOciOsubBillingScheduleBillingSchedulesBillingSchedules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.amount"></a>

```go
func Amount() *string
```

- *Type:* *string

---

##### `ArCustomerTransactionId`<sup>Required</sup> <a name="ArCustomerTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId"></a>

```go
func ArCustomerTransactionId() *string
```

- *Type:* *string

---

##### `ArInvoiceNumber`<sup>Required</sup> <a name="ArInvoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber"></a>

```go
func ArInvoiceNumber() *string
```

- *Type:* *string

---

##### `BillingFrequency`<sup>Required</sup> <a name="BillingFrequency" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency"></a>

```go
func BillingFrequency() *string
```

- *Type:* *string

---

##### `InvoiceStatus`<sup>Required</sup> <a name="InvoiceStatus" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus"></a>

```go
func InvoiceStatus() *string
```

- *Type:* *string

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice"></a>

```go
func NetUnitPrice() *string
```

- *Type:* *string

---

##### `OrderNumber`<sup>Required</sup> <a name="OrderNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.orderNumber"></a>

```go
func OrderNumber() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.product"></a>

```go
func Product() DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList</a>

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.quantity"></a>

```go
func Quantity() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeInvoicing`<sup>Required</sup> <a name="TimeInvoicing" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing"></a>

```go
func TimeInvoicing() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsubBillingScheduleBillingSchedulesBillingSchedules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules">DataOciOsubBillingScheduleBillingSchedulesBillingSchedules</a>

---


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

dataociosubbillingschedulebillingschedules.NewDataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.get"></a>

```go
func Get(index *f64) DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

dataociosubbillingschedulebillingschedules.NewDataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct</a>

---


### DataOciOsubBillingScheduleBillingSchedulesFilterList <a name="DataOciOsubBillingScheduleBillingSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

dataociosubbillingschedulebillingschedules.NewDataOciOsubBillingScheduleBillingSchedulesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubBillingScheduleBillingSchedulesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.get"></a>

```go
func Get(index *f64) DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference <a name="DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubbillingschedulebillingschedules"

dataociosubbillingschedulebillingschedules.NewDataOciOsubBillingScheduleBillingSchedulesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



