# `dataOciCoreComputeCapacityReservation` Submodule <a name="`dataOciCoreComputeCapacityReservation` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeCapacityReservation <a name="DataOciCoreComputeCapacityReservation" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation oci_core_compute_capacity_reservation}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

dataocicorecomputecapacityreservation.NewDataOciCoreComputeCapacityReservation(scope Construct, id *string, config DataOciCoreComputeCapacityReservationConfig) DataOciCoreComputeCapacityReservation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig">DataOciCoreComputeCapacityReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig">DataOciCoreComputeCapacityReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeCapacityReservation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

dataocicorecomputecapacityreservation.DataOciCoreComputeCapacityReservation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

dataocicorecomputecapacityreservation.DataOciCoreComputeCapacityReservation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

dataocicorecomputecapacityreservation.DataOciCoreComputeCapacityReservation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

dataocicorecomputecapacityreservation.DataOciCoreComputeCapacityReservation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreComputeCapacityReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreComputeCapacityReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreComputeCapacityReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeCapacityReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.instanceReservationConfigs">InstanceReservationConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList">DataOciCoreComputeCapacityReservationInstanceReservationConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.isDefaultReservation">IsDefaultReservation</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.reservedInstanceCount">ReservedInstanceCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.usedInstanceCount">UsedInstanceCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceReservationConfigs`<sup>Required</sup> <a name="InstanceReservationConfigs" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.instanceReservationConfigs"></a>

```go
func InstanceReservationConfigs() DataOciCoreComputeCapacityReservationInstanceReservationConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList">DataOciCoreComputeCapacityReservationInstanceReservationConfigsList</a>

---

##### `IsDefaultReservation`<sup>Required</sup> <a name="IsDefaultReservation" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.isDefaultReservation"></a>

```go
func IsDefaultReservation() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ReservedInstanceCount`<sup>Required</sup> <a name="ReservedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.reservedInstanceCount"></a>

```go
func ReservedInstanceCount() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UsedInstanceCount`<sup>Required</sup> <a name="UsedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.usedInstanceCount"></a>

```go
func UsedInstanceCount() *string
```

- *Type:* *string

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.capacityReservationIdInput"></a>

```go
func CapacityReservationIdInput() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeCapacityReservationConfig <a name="DataOciCoreComputeCapacityReservationConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

&dataocicorecomputecapacityreservation.DataOciCoreComputeCapacityReservationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CapacityReservationId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation#capacity_reservation_id DataOciCoreComputeCapacityReservation#capacity_reservation_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationConfig.property.capacityReservationId"></a>

```go
CapacityReservationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation#capacity_reservation_id DataOciCoreComputeCapacityReservation#capacity_reservation_id}.

---

### DataOciCoreComputeCapacityReservationInstanceReservationConfigs <a name="DataOciCoreComputeCapacityReservationInstanceReservationConfigs" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

&dataocicorecomputecapacityreservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigs {

}
```


### DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfig <a name="DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

&dataocicorecomputecapacityreservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfig {

}
```


### DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig <a name="DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

&dataocicorecomputecapacityreservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList <a name="DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

dataocicorecomputecapacityreservation.NewDataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference <a name="DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

dataocicorecomputecapacityreservation.NewDataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.hpcIslandId">HpcIslandId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.networkBlockIds">NetworkBlockIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfig">DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HpcIslandId`<sup>Required</sup> <a name="HpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.hpcIslandId"></a>

```go
func HpcIslandId() *string
```

- *Type:* *string

---

##### `NetworkBlockIds`<sup>Required</sup> <a name="NetworkBlockIds" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.networkBlockIds"></a>

```go
func NetworkBlockIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfig">DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfig</a>

---


### DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList <a name="DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

dataocicorecomputecapacityreservation.NewDataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference <a name="DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

dataocicorecomputecapacityreservation.NewDataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig">DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig">DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig</a>

---


### DataOciCoreComputeCapacityReservationInstanceReservationConfigsList <a name="DataOciCoreComputeCapacityReservationInstanceReservationConfigsList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

dataocicorecomputecapacityreservation.NewDataOciCoreComputeCapacityReservationInstanceReservationConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeCapacityReservationInstanceReservationConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference <a name="DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservation"

dataocicorecomputecapacityreservation.NewDataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList">DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.instanceShape">InstanceShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.instanceShapeConfig">InstanceShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList">DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.reservedCount">ReservedCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.usedCount">UsedCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigs">DataOciCoreComputeCapacityReservationInstanceReservationConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.clusterConfig"></a>

```go
func ClusterConfig() DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList">DataOciCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList</a>

---

##### `ClusterPlacementGroupId`<sup>Required</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.clusterPlacementGroupId"></a>

```go
func ClusterPlacementGroupId() *string
```

- *Type:* *string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `InstanceShape`<sup>Required</sup> <a name="InstanceShape" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.instanceShape"></a>

```go
func InstanceShape() *string
```

- *Type:* *string

---

##### `InstanceShapeConfig`<sup>Required</sup> <a name="InstanceShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.instanceShapeConfig"></a>

```go
func InstanceShapeConfig() DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList">DataOciCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList</a>

---

##### `ReservedCount`<sup>Required</sup> <a name="ReservedCount" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.reservedCount"></a>

```go
func ReservedCount() *string
```

- *Type:* *string

---

##### `UsedCount`<sup>Required</sup> <a name="UsedCount" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.usedCount"></a>

```go
func UsedCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreComputeCapacityReservationInstanceReservationConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservation.DataOciCoreComputeCapacityReservationInstanceReservationConfigs">DataOciCoreComputeCapacityReservationInstanceReservationConfigs</a>

---



