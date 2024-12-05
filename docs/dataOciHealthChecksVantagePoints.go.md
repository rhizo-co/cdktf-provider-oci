# `dataOciHealthChecksVantagePoints` Submodule <a name="`dataOciHealthChecksVantagePoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksVantagePoints <a name="DataOciHealthChecksVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points oci_health_checks_vantage_points}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

dataocihealthchecksvantagepoints.NewDataOciHealthChecksVantagePoints(scope Construct, id *string, config DataOciHealthChecksVantagePointsConfig) DataOciHealthChecksVantagePoints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig">DataOciHealthChecksVantagePointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig">DataOciHealthChecksVantagePointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciHealthChecksVantagePoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

dataocihealthchecksvantagepoints.DataOciHealthChecksVantagePoints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

dataocihealthchecksvantagepoints.DataOciHealthChecksVantagePoints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

dataocihealthchecksvantagepoints.DataOciHealthChecksVantagePoints_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

dataocihealthchecksvantagepoints.DataOciHealthChecksVantagePoints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciHealthChecksVantagePoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciHealthChecksVantagePoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciHealthChecksVantagePoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksVantagePoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList">DataOciHealthChecksVantagePointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.healthChecksVantagePoints">HealthChecksVantagePoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.filter"></a>

```go
func Filter() DataOciHealthChecksVantagePointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList">DataOciHealthChecksVantagePointsFilterList</a>

---

##### `HealthChecksVantagePoints`<sup>Required</sup> <a name="HealthChecksVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.healthChecksVantagePoints"></a>

```go
func HealthChecksVantagePoints() DataOciHealthChecksVantagePointsHealthChecksVantagePointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksVantagePointsConfig <a name="DataOciHealthChecksVantagePointsConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

&dataocihealthchecksvantagepoints.DataOciHealthChecksVantagePointsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#display_name DataOciHealthChecksVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#id DataOciHealthChecksVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#name DataOciHealthChecksVantagePoints#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#display_name DataOciHealthChecksVantagePoints#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#filter DataOciHealthChecksVantagePoints#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#id DataOciHealthChecksVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#name DataOciHealthChecksVantagePoints#name}.

---

### DataOciHealthChecksVantagePointsFilter <a name="DataOciHealthChecksVantagePointsFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

&dataocihealthchecksvantagepoints.DataOciHealthChecksVantagePointsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#name DataOciHealthChecksVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#values DataOciHealthChecksVantagePoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#regex DataOciHealthChecksVantagePoints#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#name DataOciHealthChecksVantagePoints#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#values DataOciHealthChecksVantagePoints#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#regex DataOciHealthChecksVantagePoints#regex}.

---

### DataOciHealthChecksVantagePointsHealthChecksVantagePoints <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

&dataocihealthchecksvantagepoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints {

}
```


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

&dataocihealthchecksvantagepoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo {

}
```


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

&dataocihealthchecksvantagepoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciHealthChecksVantagePointsFilterList <a name="DataOciHealthChecksVantagePointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

dataocihealthchecksvantagepoints.NewDataOciHealthChecksVantagePointsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciHealthChecksVantagePointsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.get"></a>

```go
func Get(index *f64) DataOciHealthChecksVantagePointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciHealthChecksVantagePointsFilterOutputReference <a name="DataOciHealthChecksVantagePointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

dataocihealthchecksvantagepoints.NewDataOciHealthChecksVantagePointsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciHealthChecksVantagePointsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

dataocihealthchecksvantagepoints.NewDataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.get"></a>

```go
func Get(index *f64) DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

dataocihealthchecksvantagepoints.NewDataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.adminDivCode">AdminDivCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.cityName">CityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.countryName">CountryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.geoKey">GeoKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.latitude">Latitude</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.longitude">Longitude</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo">DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminDivCode`<sup>Required</sup> <a name="AdminDivCode" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.adminDivCode"></a>

```go
func AdminDivCode() *string
```

- *Type:* *string

---

##### `CityName`<sup>Required</sup> <a name="CityName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.cityName"></a>

```go
func CityName() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `CountryName`<sup>Required</sup> <a name="CountryName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.countryName"></a>

```go
func CountryName() *string
```

- *Type:* *string

---

##### `GeoKey`<sup>Required</sup> <a name="GeoKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.geoKey"></a>

```go
func GeoKey() *string
```

- *Type:* *string

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.latitude"></a>

```go
func Latitude() *f64
```

- *Type:* *f64

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.longitude"></a>

```go
func Longitude() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo">DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo</a>

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsList <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

dataocihealthchecksvantagepoints.NewDataOciHealthChecksVantagePointsHealthChecksVantagePointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciHealthChecksVantagePointsHealthChecksVantagePointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.get"></a>

```go
func Get(index *f64) DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

dataocihealthchecksvantagepoints.NewDataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.geo">Geo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.routing">Routing</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints">DataOciHealthChecksVantagePointsHealthChecksVantagePoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.geo"></a>

```go
func Geo() DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.routing"></a>

```go
func Routing() DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciHealthChecksVantagePointsHealthChecksVantagePoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints">DataOciHealthChecksVantagePointsHealthChecksVantagePoints</a>

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

dataocihealthchecksvantagepoints.NewDataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.get"></a>

```go
func Get(index *f64) DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthchecksvantagepoints"

dataocihealthchecksvantagepoints.NewDataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.asLabel">AsLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.asn">Asn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting">DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AsLabel`<sup>Required</sup> <a name="AsLabel" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.asLabel"></a>

```go
func AsLabel() *string
```

- *Type:* *string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.asn"></a>

```go
func Asn() *f64
```

- *Type:* *f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting">DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting</a>

---



