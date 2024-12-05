# `dataOciGoldenGateConnectionAssignments` Submodule <a name="`dataOciGoldenGateConnectionAssignments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateConnectionAssignments <a name="DataOciGoldenGateConnectionAssignments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments oci_golden_gate_connection_assignments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

dataocigoldengateconnectionassignments.NewDataOciGoldenGateConnectionAssignments(scope Construct, id *string, config DataOciGoldenGateConnectionAssignmentsConfig) DataOciGoldenGateConnectionAssignments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig">DataOciGoldenGateConnectionAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig">DataOciGoldenGateConnectionAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConnectionId` <a name="ResetConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetConnectionId"></a>

```go
func ResetConnectionId()
```

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetDeploymentId"></a>

```go
func ResetDeploymentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetName"></a>

```go
func ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateConnectionAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

dataocigoldengateconnectionassignments.DataOciGoldenGateConnectionAssignments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

dataocigoldengateconnectionassignments.DataOciGoldenGateConnectionAssignments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

dataocigoldengateconnectionassignments.DataOciGoldenGateConnectionAssignments_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

dataocigoldengateconnectionassignments.DataOciGoldenGateConnectionAssignments_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciGoldenGateConnectionAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciGoldenGateConnectionAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciGoldenGateConnectionAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateConnectionAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.connectionAssignmentCollection">ConnectionAssignmentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList">DataOciGoldenGateConnectionAssignmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ConnectionAssignmentCollection`<sup>Required</sup> <a name="ConnectionAssignmentCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.connectionAssignmentCollection"></a>

```go
func ConnectionAssignmentCollection() DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.filter"></a>

```go
func Filter() DataOciGoldenGateConnectionAssignmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList">DataOciGoldenGateConnectionAssignmentsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.deploymentIdInput"></a>

```go
func DeploymentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateConnectionAssignmentsConfig <a name="DataOciGoldenGateConnectionAssignmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

&dataocigoldengateconnectionassignments.DataOciGoldenGateConnectionAssignmentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ConnectionId: *string,
	DeploymentId: *string,
	Filter: interface{},
	Id: *string,
	Name: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#compartment_id DataOciGoldenGateConnectionAssignments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.connectionId">ConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#connection_id DataOciGoldenGateConnectionAssignments#connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#deployment_id DataOciGoldenGateConnectionAssignments#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#id DataOciGoldenGateConnectionAssignments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#name DataOciGoldenGateConnectionAssignments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#state DataOciGoldenGateConnectionAssignments#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#compartment_id DataOciGoldenGateConnectionAssignments#compartment_id}.

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#connection_id DataOciGoldenGateConnectionAssignments#connection_id}.

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.deploymentId"></a>

```go
DeploymentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#deployment_id DataOciGoldenGateConnectionAssignments#deployment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#filter DataOciGoldenGateConnectionAssignments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#id DataOciGoldenGateConnectionAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#name DataOciGoldenGateConnectionAssignments#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#state DataOciGoldenGateConnectionAssignments#state}.

---

### DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection <a name="DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

&dataocigoldengateconnectionassignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection {

}
```


### DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems <a name="DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

&dataocigoldengateconnectionassignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems {

}
```


### DataOciGoldenGateConnectionAssignmentsFilter <a name="DataOciGoldenGateConnectionAssignmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

&dataocigoldengateconnectionassignments.DataOciGoldenGateConnectionAssignmentsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#name DataOciGoldenGateConnectionAssignments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#values DataOciGoldenGateConnectionAssignments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#regex DataOciGoldenGateConnectionAssignments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#name DataOciGoldenGateConnectionAssignments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#values DataOciGoldenGateConnectionAssignments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection_assignments#regex DataOciGoldenGateConnectionAssignments#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList <a name="DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

dataocigoldengateconnectionassignments.NewDataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference <a name="DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

dataocigoldengateconnectionassignments.NewDataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.aliasName">AliasName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.isLockOverride">IsLockOverride</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.aliasName"></a>

```go
func AliasName() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.isLockOverride"></a>

```go
func IsLockOverride() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItems</a>

---


### DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList <a name="DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

dataocigoldengateconnectionassignments.NewDataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.get"></a>

```go
func Get(index *f64) DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference <a name="DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

dataocigoldengateconnectionassignments.NewDataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.items"></a>

```go
func Items() DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection">DataOciGoldenGateConnectionAssignmentsConnectionAssignmentCollection</a>

---


### DataOciGoldenGateConnectionAssignmentsFilterList <a name="DataOciGoldenGateConnectionAssignmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

dataocigoldengateconnectionassignments.NewDataOciGoldenGateConnectionAssignmentsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGoldenGateConnectionAssignmentsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.get"></a>

```go
func Get(index *f64) DataOciGoldenGateConnectionAssignmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciGoldenGateConnectionAssignmentsFilterOutputReference <a name="DataOciGoldenGateConnectionAssignmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengateconnectionassignments"

dataocigoldengateconnectionassignments.NewDataOciGoldenGateConnectionAssignmentsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGoldenGateConnectionAssignmentsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnectionAssignments.DataOciGoldenGateConnectionAssignmentsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



