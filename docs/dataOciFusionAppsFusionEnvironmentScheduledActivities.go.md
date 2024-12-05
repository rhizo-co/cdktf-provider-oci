# `dataOciFusionAppsFusionEnvironmentScheduledActivities` Submodule <a name="`dataOciFusionAppsFusionEnvironmentScheduledActivities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivities <a name="DataOciFusionAppsFusionEnvironmentScheduledActivities" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities oci_fusion_apps_fusion_environment_scheduled_activities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

dataocifusionappsfusionenvironmentscheduledactivities.NewDataOciFusionAppsFusionEnvironmentScheduledActivities(scope Construct, id *string, config DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig) DataOciFusionAppsFusionEnvironmentScheduledActivities
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig">DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig">DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetRunCycle">ResetRunCycle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetTimeExpectedFinishLessThanOrEqualTo">ResetTimeExpectedFinishLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetTimeScheduledStartGreaterThanOrEqualTo">ResetTimeScheduledStartGreaterThanOrEqualTo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetId"></a>

```go
func ResetId()
```

##### `ResetRunCycle` <a name="ResetRunCycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetRunCycle"></a>

```go
func ResetRunCycle()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeExpectedFinishLessThanOrEqualTo` <a name="ResetTimeExpectedFinishLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetTimeExpectedFinishLessThanOrEqualTo"></a>

```go
func ResetTimeExpectedFinishLessThanOrEqualTo()
```

##### `ResetTimeScheduledStartGreaterThanOrEqualTo` <a name="ResetTimeScheduledStartGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.resetTimeScheduledStartGreaterThanOrEqualTo"></a>

```go
func ResetTimeScheduledStartGreaterThanOrEqualTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentScheduledActivities resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

dataocifusionappsfusionenvironmentscheduledactivities.DataOciFusionAppsFusionEnvironmentScheduledActivities_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

dataocifusionappsfusionenvironmentscheduledactivities.DataOciFusionAppsFusionEnvironmentScheduledActivities_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

dataocifusionappsfusionenvironmentscheduledactivities.DataOciFusionAppsFusionEnvironmentScheduledActivities_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

dataocifusionappsfusionenvironmentscheduledactivities.DataOciFusionAppsFusionEnvironmentScheduledActivities_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentScheduledActivities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentScheduledActivities to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFusionAppsFusionEnvironmentScheduledActivities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentScheduledActivities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.scheduledActivityCollection">ScheduledActivityCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.fusionEnvironmentIdInput">FusionEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.runCycleInput">RunCycleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeExpectedFinishLessThanOrEqualToInput">TimeExpectedFinishLessThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeScheduledStartGreaterThanOrEqualToInput">TimeScheduledStartGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.runCycle">RunCycle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeExpectedFinishLessThanOrEqualTo">TimeExpectedFinishLessThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeScheduledStartGreaterThanOrEqualTo">TimeScheduledStartGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.filter"></a>

```go
func Filter() DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList</a>

---

##### `ScheduledActivityCollection`<sup>Required</sup> <a name="ScheduledActivityCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.scheduledActivityCollection"></a>

```go
func ScheduledActivityCollection() DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `FusionEnvironmentIdInput`<sup>Optional</sup> <a name="FusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.fusionEnvironmentIdInput"></a>

```go
func FusionEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RunCycleInput`<sup>Optional</sup> <a name="RunCycleInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.runCycleInput"></a>

```go
func RunCycleInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeExpectedFinishLessThanOrEqualToInput`<sup>Optional</sup> <a name="TimeExpectedFinishLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeExpectedFinishLessThanOrEqualToInput"></a>

```go
func TimeExpectedFinishLessThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeScheduledStartGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeScheduledStartGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeScheduledStartGreaterThanOrEqualToInput"></a>

```go
func TimeScheduledStartGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.fusionEnvironmentId"></a>

```go
func FusionEnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RunCycle`<sup>Required</sup> <a name="RunCycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.runCycle"></a>

```go
func RunCycle() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeExpectedFinishLessThanOrEqualTo`<sup>Required</sup> <a name="TimeExpectedFinishLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeExpectedFinishLessThanOrEqualTo"></a>

```go
func TimeExpectedFinishLessThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeScheduledStartGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeScheduledStartGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.timeScheduledStartGreaterThanOrEqualTo"></a>

```go
func TimeScheduledStartGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivities.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

&dataocifusionappsfusionenvironmentscheduledactivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FusionEnvironmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	RunCycle: *string,
	State: *string,
	TimeExpectedFinishLessThanOrEqualTo: *string,
	TimeScheduledStartGreaterThanOrEqualTo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivities#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#display_name DataOciFusionAppsFusionEnvironmentScheduledActivities#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#id DataOciFusionAppsFusionEnvironmentScheduledActivities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.runCycle">RunCycle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#run_cycle DataOciFusionAppsFusionEnvironmentScheduledActivities#run_cycle}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#state DataOciFusionAppsFusionEnvironmentScheduledActivities#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.timeExpectedFinishLessThanOrEqualTo">TimeExpectedFinishLessThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#time_expected_finish_less_than_or_equal_to DataOciFusionAppsFusionEnvironmentScheduledActivities#time_expected_finish_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.timeScheduledStartGreaterThanOrEqualTo">TimeScheduledStartGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#time_scheduled_start_greater_than_or_equal_to DataOciFusionAppsFusionEnvironmentScheduledActivities#time_scheduled_start_greater_than_or_equal_to}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.fusionEnvironmentId"></a>

```go
FusionEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivities#fusion_environment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#display_name DataOciFusionAppsFusionEnvironmentScheduledActivities#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#filter DataOciFusionAppsFusionEnvironmentScheduledActivities#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#id DataOciFusionAppsFusionEnvironmentScheduledActivities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RunCycle`<sup>Optional</sup> <a name="RunCycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.runCycle"></a>

```go
RunCycle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#run_cycle DataOciFusionAppsFusionEnvironmentScheduledActivities#run_cycle}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#state DataOciFusionAppsFusionEnvironmentScheduledActivities#state}.

---

##### `TimeExpectedFinishLessThanOrEqualTo`<sup>Optional</sup> <a name="TimeExpectedFinishLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.timeExpectedFinishLessThanOrEqualTo"></a>

```go
TimeExpectedFinishLessThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#time_expected_finish_less_than_or_equal_to DataOciFusionAppsFusionEnvironmentScheduledActivities#time_expected_finish_less_than_or_equal_to}.

---

##### `TimeScheduledStartGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeScheduledStartGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesConfig.property.timeScheduledStartGreaterThanOrEqualTo"></a>

```go
TimeScheduledStartGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#time_scheduled_start_greater_than_or_equal_to DataOciFusionAppsFusionEnvironmentScheduledActivities#time_scheduled_start_greater_than_or_equal_to}.

---

### DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

&dataocifusionappsfusionenvironmentscheduledactivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#name DataOciFusionAppsFusionEnvironmentScheduledActivities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#values DataOciFusionAppsFusionEnvironmentScheduledActivities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#regex DataOciFusionAppsFusionEnvironmentScheduledActivities#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#name DataOciFusionAppsFusionEnvironmentScheduledActivities#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#values DataOciFusionAppsFusionEnvironmentScheduledActivities#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activities#regex DataOciFusionAppsFusionEnvironmentScheduledActivities#regex}.

---

### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

&dataocifusionappsfusionenvironmentscheduledactivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection {

}
```


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

&dataocifusionappsfusionenvironmentscheduledactivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems {

}
```


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

&dataocifusionappsfusionenvironmentscheduledactivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

dataocifusionappsfusionenvironmentscheduledactivities.NewDataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.get"></a>

```go
func Get(index *f64) DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

dataocifusionappsfusionenvironmentscheduledactivities.NewDataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

dataocifusionappsfusionenvironmentscheduledactivities.NewDataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.get"></a>

```go
func Get(index *f64) DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

dataocifusionappsfusionenvironmentscheduledactivities.NewDataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.artifact">Artifact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.qualifier">Qualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.referenceKey">ReferenceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `Artifact`<sup>Required</sup> <a name="Artifact" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.artifact"></a>

```go
func Artifact() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.qualifier"></a>

```go
func Qualifier() *string
```

- *Type:* *string

---

##### `ReferenceKey`<sup>Required</sup> <a name="ReferenceKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.referenceKey"></a>

```go
func ReferenceKey() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActions</a>

---


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

dataocifusionappsfusionenvironmentscheduledactivities.NewDataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

dataocifusionappsfusionenvironmentscheduledactivities.NewDataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.actions">Actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.delayInHours">DelayInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.runCycle">RunCycle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.serviceAvailability">ServiceAvailability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeAccepted">TimeAccepted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeExpectedFinish">TimeExpectedFinish</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeScheduledStart">TimeScheduledStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.actions"></a>

```go
func Actions() DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsActionsList</a>

---

##### `DelayInHours`<sup>Required</sup> <a name="DelayInHours" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.delayInHours"></a>

```go
func DelayInHours() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.fusionEnvironmentId"></a>

```go
func FusionEnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `RunCycle`<sup>Required</sup> <a name="RunCycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.runCycle"></a>

```go
func RunCycle() *string
```

- *Type:* *string

---

##### `ServiceAvailability`<sup>Required</sup> <a name="ServiceAvailability" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.serviceAvailability"></a>

```go
func ServiceAvailability() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeAccepted"></a>

```go
func TimeAccepted() *string
```

- *Type:* *string

---

##### `TimeExpectedFinish`<sup>Required</sup> <a name="TimeExpectedFinish" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeExpectedFinish"></a>

```go
func TimeExpectedFinish() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeScheduledStart`<sup>Required</sup> <a name="TimeScheduledStart" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeScheduledStart"></a>

```go
func TimeScheduledStart() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItems</a>

---


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

dataocifusionappsfusionenvironmentscheduledactivities.NewDataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.get"></a>

```go
func Get(index *f64) DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference <a name="DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivities"

dataocifusionappsfusionenvironmentscheduledactivities.NewDataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.items"></a>

```go
func Items() DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivities.DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection">DataOciFusionAppsFusionEnvironmentScheduledActivitiesScheduledActivityCollection</a>

---



