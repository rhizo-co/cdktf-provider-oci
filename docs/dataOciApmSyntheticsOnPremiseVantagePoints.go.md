# `dataOciApmSyntheticsOnPremiseVantagePoints` Submodule <a name="`dataOciApmSyntheticsOnPremiseVantagePoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsOnPremiseVantagePoints <a name="DataOciApmSyntheticsOnPremiseVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points oci_apm_synthetics_on_premise_vantage_points}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.NewDataOciApmSyntheticsOnPremiseVantagePoints(scope Construct, id *string, config DataOciApmSyntheticsOnPremiseVantagePointsConfig) DataOciApmSyntheticsOnPremiseVantagePoints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig">DataOciApmSyntheticsOnPremiseVantagePointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig">DataOciApmSyntheticsOnPremiseVantagePointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsOnPremiseVantagePoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.DataOciApmSyntheticsOnPremiseVantagePoints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.DataOciApmSyntheticsOnPremiseVantagePoints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.DataOciApmSyntheticsOnPremiseVantagePoints_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.DataOciApmSyntheticsOnPremiseVantagePoints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciApmSyntheticsOnPremiseVantagePoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciApmSyntheticsOnPremiseVantagePoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciApmSyntheticsOnPremiseVantagePoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsOnPremiseVantagePoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList">DataOciApmSyntheticsOnPremiseVantagePointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.onPremiseVantagePointCollection">OnPremiseVantagePointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.filter"></a>

```go
func Filter() DataOciApmSyntheticsOnPremiseVantagePointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList">DataOciApmSyntheticsOnPremiseVantagePointsFilterList</a>

---

##### `OnPremiseVantagePointCollection`<sup>Required</sup> <a name="OnPremiseVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.onPremiseVantagePointCollection"></a>

```go
func OnPremiseVantagePointCollection() DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList</a>

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.apmDomainIdInput"></a>

```go
func ApmDomainIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.apmDomainId"></a>

```go
func ApmDomainId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsOnPremiseVantagePointsConfig <a name="DataOciApmSyntheticsOnPremiseVantagePointsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

&dataociapmsyntheticsonpremisevantagepoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig {
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
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePoints#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#display_name DataOciApmSyntheticsOnPremiseVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#id DataOciApmSyntheticsOnPremiseVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#name DataOciApmSyntheticsOnPremiseVantagePoints#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.apmDomainId"></a>

```go
ApmDomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePoints#apm_domain_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#display_name DataOciApmSyntheticsOnPremiseVantagePoints#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#filter DataOciApmSyntheticsOnPremiseVantagePoints#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#id DataOciApmSyntheticsOnPremiseVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#name DataOciApmSyntheticsOnPremiseVantagePoints#name}.

---

### DataOciApmSyntheticsOnPremiseVantagePointsFilter <a name="DataOciApmSyntheticsOnPremiseVantagePointsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

&dataociapmsyntheticsonpremisevantagepoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#name DataOciApmSyntheticsOnPremiseVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#values DataOciApmSyntheticsOnPremiseVantagePoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#regex DataOciApmSyntheticsOnPremiseVantagePoints#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#name DataOciApmSyntheticsOnPremiseVantagePoints#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#values DataOciApmSyntheticsOnPremiseVantagePoints#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#regex DataOciApmSyntheticsOnPremiseVantagePoints#regex}.

---

### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

&dataociapmsyntheticsonpremisevantagepoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection {

}
```


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

&dataociapmsyntheticsonpremisevantagepoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems {

}
```


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

&dataociapmsyntheticsonpremisevantagepoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary {

}
```


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

&dataociapmsyntheticsonpremisevantagepoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsOnPremiseVantagePointsFilterList <a name="DataOciApmSyntheticsOnPremiseVantagePointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.NewDataOciApmSyntheticsOnPremiseVantagePointsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsOnPremiseVantagePointsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.NewDataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.NewDataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.NewDataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.workersSummary">WorkersSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.apmDomainId"></a>

```go
func ApmDomainId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WorkersSummary`<sup>Required</sup> <a name="WorkersSummary" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.workersSummary"></a>

```go
func WorkersSummary() DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.NewDataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.NewDataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.capability">Capability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.onPremiseVantagePointCount">OnPremiseVantagePointCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.capability"></a>

```go
func Capability() *string
```

- *Type:* *string

---

##### `OnPremiseVantagePointCount`<sup>Required</sup> <a name="OnPremiseVantagePointCount" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.onPremiseVantagePointCount"></a>

```go
func OnPremiseVantagePointCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.NewDataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.NewDataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.available">Available</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.availableCapabilities">AvailableCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.disabled">Disabled</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.minVersion">MinVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.total">Total</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.used">Used</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Available`<sup>Required</sup> <a name="Available" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.available"></a>

```go
func Available() *f64
```

- *Type:* *f64

---

##### `AvailableCapabilities`<sup>Required</sup> <a name="AvailableCapabilities" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.availableCapabilities"></a>

```go
func AvailableCapabilities() DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList</a>

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.disabled"></a>

```go
func Disabled() *f64
```

- *Type:* *f64

---

##### `MinVersion`<sup>Required</sup> <a name="MinVersion" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.minVersion"></a>

```go
func MinVersion() *string
```

- *Type:* *string

---

##### `Total`<sup>Required</sup> <a name="Total" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.total"></a>

```go
func Total() *f64
```

- *Type:* *f64

---

##### `Used`<sup>Required</sup> <a name="Used" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.used"></a>

```go
func Used() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.NewDataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsonpremisevantagepoints"

dataociapmsyntheticsonpremisevantagepoints.NewDataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.items"></a>

```go
func Items() DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection</a>

---



