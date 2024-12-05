# `dataOciApmSyntheticsDedicatedVantagePoints` Submodule <a name="`dataOciApmSyntheticsDedicatedVantagePoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsDedicatedVantagePoints <a name="DataOciApmSyntheticsDedicatedVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points oci_apm_synthetics_dedicated_vantage_points}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.NewDataOciApmSyntheticsDedicatedVantagePoints(scope Construct, id *string, config DataOciApmSyntheticsDedicatedVantagePointsConfig) DataOciApmSyntheticsDedicatedVantagePoints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig">DataOciApmSyntheticsDedicatedVantagePointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig">DataOciApmSyntheticsDedicatedVantagePointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetName"></a>

```go
func ResetName()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsDedicatedVantagePoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.DataOciApmSyntheticsDedicatedVantagePoints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.DataOciApmSyntheticsDedicatedVantagePoints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.DataOciApmSyntheticsDedicatedVantagePoints_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.DataOciApmSyntheticsDedicatedVantagePoints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciApmSyntheticsDedicatedVantagePoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciApmSyntheticsDedicatedVantagePoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciApmSyntheticsDedicatedVantagePoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsDedicatedVantagePoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dedicatedVantagePointCollection">DedicatedVantagePointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList">DataOciApmSyntheticsDedicatedVantagePointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DedicatedVantagePointCollection`<sup>Required</sup> <a name="DedicatedVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dedicatedVantagePointCollection"></a>

```go
func DedicatedVantagePointCollection() DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filter"></a>

```go
func Filter() DataOciApmSyntheticsDedicatedVantagePointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList">DataOciApmSyntheticsDedicatedVantagePointsFilterList</a>

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainIdInput"></a>

```go
func ApmDomainIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainId"></a>

```go
func ApmDomainId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsDedicatedVantagePointsConfig <a name="DataOciApmSyntheticsDedicatedVantagePointsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

&dataociapmsyntheticsdedicatedvantagepoints.DataOciApmSyntheticsDedicatedVantagePointsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApmDomainId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	Name: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#apm_domain_id DataOciApmSyntheticsDedicatedVantagePoints#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#display_name DataOciApmSyntheticsDedicatedVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#id DataOciApmSyntheticsDedicatedVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#status DataOciApmSyntheticsDedicatedVantagePoints#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.apmDomainId"></a>

```go
ApmDomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#apm_domain_id DataOciApmSyntheticsDedicatedVantagePoints#apm_domain_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#display_name DataOciApmSyntheticsDedicatedVantagePoints#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#filter DataOciApmSyntheticsDedicatedVantagePoints#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#id DataOciApmSyntheticsDedicatedVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#status DataOciApmSyntheticsDedicatedVantagePoints#status}.

---

### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

&dataociapmsyntheticsdedicatedvantagepoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection {

}
```


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

&dataociapmsyntheticsdedicatedvantagepoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems {

}
```


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

&dataociapmsyntheticsdedicatedvantagepoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails {

}
```


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

&dataociapmsyntheticsdedicatedvantagepoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap {

}
```


### DataOciApmSyntheticsDedicatedVantagePointsFilter <a name="DataOciApmSyntheticsDedicatedVantagePointsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

&dataociapmsyntheticsdedicatedvantagepoints.DataOciApmSyntheticsDedicatedVantagePointsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#values DataOciApmSyntheticsDedicatedVantagePoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#regex DataOciApmSyntheticsDedicatedVantagePoints#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#values DataOciApmSyntheticsDedicatedVantagePoints#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#regex DataOciApmSyntheticsDedicatedVantagePoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.NewDataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.NewDataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackId">DvpStackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackType">DvpStackType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStreamId">DvpStreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpVersion">DvpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DvpStackId`<sup>Required</sup> <a name="DvpStackId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackId"></a>

```go
func DvpStackId() *string
```

- *Type:* *string

---

##### `DvpStackType`<sup>Required</sup> <a name="DvpStackType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackType"></a>

```go
func DvpStackType() *string
```

- *Type:* *string

---

##### `DvpStreamId`<sup>Required</sup> <a name="DvpStreamId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStreamId"></a>

```go
func DvpStreamId() *string
```

- *Type:* *string

---

##### `DvpVersion`<sup>Required</sup> <a name="DvpVersion" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpVersion"></a>

```go
func DvpVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.NewDataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.NewDataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.NewDataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.disabled">Disabled</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.enabled">Enabled</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.invalid">Invalid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.total">Total</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.disabled"></a>

```go
func Disabled() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.enabled"></a>

```go
func Enabled() *f64
```

- *Type:* *f64

---

##### `Invalid`<sup>Required</sup> <a name="Invalid" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.invalid"></a>

```go
func Invalid() *f64
```

- *Type:* *f64

---

##### `Total`<sup>Required</sup> <a name="Total" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.total"></a>

```go
func Total() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.NewDataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.dvpStackDetails">DvpStackDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.monitorStatusCountMap">MonitorStatusCountMap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.apmDomainId"></a>

```go
func ApmDomainId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DvpStackDetails`<sup>Required</sup> <a name="DvpStackDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.dvpStackDetails"></a>

```go
func DvpStackDetails() DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MonitorStatusCountMap`<sup>Required</sup> <a name="MonitorStatusCountMap" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.monitorStatusCountMap"></a>

```go
func MonitorStatusCountMap() DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.NewDataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.NewDataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.items"></a>

```go
func Items() DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsFilterList <a name="DataOciApmSyntheticsDedicatedVantagePointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.NewDataOciApmSyntheticsDedicatedVantagePointsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsDedicatedVantagePointsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoints"

dataociapmsyntheticsdedicatedvantagepoints.NewDataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



