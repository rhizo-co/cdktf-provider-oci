# `dataSafeDiscoveryJobsResult` Submodule <a name="`dataSafeDiscoveryJobsResult` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeDiscoveryJobsResult <a name="DataSafeDiscoveryJobsResult" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result oci_data_safe_discovery_jobs_result}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjobsresult"

datasafediscoveryjobsresult.NewDataSafeDiscoveryJobsResult(scope Construct, id *string, config DataSafeDiscoveryJobsResultConfig) DataSafeDiscoveryJobsResult
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig">DataSafeDiscoveryJobsResultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig">DataSafeDiscoveryJobsResultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeDiscoveryJobsResultTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeDiscoveryJobsResult resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjobsresult"

datasafediscoveryjobsresult.DataSafeDiscoveryJobsResult_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjobsresult"

datasafediscoveryjobsresult.DataSafeDiscoveryJobsResult_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjobsresult"

datasafediscoveryjobsresult.DataSafeDiscoveryJobsResult_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjobsresult"

datasafediscoveryjobsresult.DataSafeDiscoveryJobsResult_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeDiscoveryJobsResult resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeDiscoveryJobsResult to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeDiscoveryJobsResult that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeDiscoveryJobsResult to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.appDefinedChildColumnKeys">AppDefinedChildColumnKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.appName">AppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dbDefinedChildColumnKeys">DbDefinedChildColumnKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryType">DiscoveryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.estimatedDataValueCount">EstimatedDataValueCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.isResultApplied">IsResultApplied</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.modifiedAttributes">ModifiedAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList">DataSafeDiscoveryJobsResultModifiedAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.parentColumnKeys">ParentColumnKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.plannedAction">PlannedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.relationType">RelationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sampleDataValues">SampleDataValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sensitiveColumnkey">SensitiveColumnkey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference">DataSafeDiscoveryJobsResultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryJobIdInput">DiscoveryJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryJobId">DiscoveryJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppDefinedChildColumnKeys`<sup>Required</sup> <a name="AppDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.appDefinedChildColumnKeys"></a>

```go
func AppDefinedChildColumnKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.appName"></a>

```go
func AppName() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DbDefinedChildColumnKeys`<sup>Required</sup> <a name="DbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dbDefinedChildColumnKeys"></a>

```go
func DbDefinedChildColumnKeys() *[]*string
```

- *Type:* *[]*string

---

##### `DiscoveryType`<sup>Required</sup> <a name="DiscoveryType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryType"></a>

```go
func DiscoveryType() *string
```

- *Type:* *string

---

##### `EstimatedDataValueCount`<sup>Required</sup> <a name="EstimatedDataValueCount" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.estimatedDataValueCount"></a>

```go
func EstimatedDataValueCount() *string
```

- *Type:* *string

---

##### `IsResultApplied`<sup>Required</sup> <a name="IsResultApplied" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.isResultApplied"></a>

```go
func IsResultApplied() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `ModifiedAttributes`<sup>Required</sup> <a name="ModifiedAttributes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.modifiedAttributes"></a>

```go
func ModifiedAttributes() DataSafeDiscoveryJobsResultModifiedAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList">DataSafeDiscoveryJobsResultModifiedAttributesList</a>

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `ParentColumnKeys`<sup>Required</sup> <a name="ParentColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.parentColumnKeys"></a>

```go
func ParentColumnKeys() *[]*string
```

- *Type:* *[]*string

---

##### `PlannedAction`<sup>Required</sup> <a name="PlannedAction" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.plannedAction"></a>

```go
func PlannedAction() *string
```

- *Type:* *string

---

##### `RelationType`<sup>Required</sup> <a name="RelationType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.relationType"></a>

```go
func RelationType() *string
```

- *Type:* *string

---

##### `SampleDataValues`<sup>Required</sup> <a name="SampleDataValues" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sampleDataValues"></a>

```go
func SampleDataValues() *[]*string
```

- *Type:* *[]*string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SensitiveColumnkey`<sup>Required</sup> <a name="SensitiveColumnkey" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sensitiveColumnkey"></a>

```go
func SensitiveColumnkey() *string
```

- *Type:* *string

---

##### `SensitiveTypeId`<sup>Required</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sensitiveTypeId"></a>

```go
func SensitiveTypeId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.timeouts"></a>

```go
func Timeouts() DataSafeDiscoveryJobsResultTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference">DataSafeDiscoveryJobsResultTimeoutsOutputReference</a>

---

##### `DiscoveryJobIdInput`<sup>Optional</sup> <a name="DiscoveryJobIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryJobIdInput"></a>

```go
func DiscoveryJobIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DiscoveryJobId`<sup>Required</sup> <a name="DiscoveryJobId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryJobId"></a>

```go
func DiscoveryJobId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeDiscoveryJobsResultConfig <a name="DataSafeDiscoveryJobsResultConfig" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjobsresult"

&datasafediscoveryjobsresult.DataSafeDiscoveryJobsResultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DiscoveryJobId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.discoveryJobId">DiscoveryJobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#discovery_job_id DataSafeDiscoveryJobsResult#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#id DataSafeDiscoveryJobsResult#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DiscoveryJobId`<sup>Required</sup> <a name="DiscoveryJobId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.discoveryJobId"></a>

```go
DiscoveryJobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#discovery_job_id DataSafeDiscoveryJobsResult#discovery_job_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#id DataSafeDiscoveryJobsResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.timeouts"></a>

```go
Timeouts DataSafeDiscoveryJobsResultTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#timeouts DataSafeDiscoveryJobsResult#timeouts}

---

### DataSafeDiscoveryJobsResultModifiedAttributes <a name="DataSafeDiscoveryJobsResultModifiedAttributes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjobsresult"

&datasafediscoveryjobsresult.DataSafeDiscoveryJobsResultModifiedAttributes {

}
```


### DataSafeDiscoveryJobsResultTimeouts <a name="DataSafeDiscoveryJobsResultTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjobsresult"

&datasafediscoveryjobsresult.DataSafeDiscoveryJobsResultTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#create DataSafeDiscoveryJobsResult#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#delete DataSafeDiscoveryJobsResult#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#update DataSafeDiscoveryJobsResult#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#create DataSafeDiscoveryJobsResult#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#delete DataSafeDiscoveryJobsResult#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#update DataSafeDiscoveryJobsResult#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeDiscoveryJobsResultModifiedAttributesList <a name="DataSafeDiscoveryJobsResultModifiedAttributesList" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjobsresult"

datasafediscoveryjobsresult.NewDataSafeDiscoveryJobsResultModifiedAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSafeDiscoveryJobsResultModifiedAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.get"></a>

```go
func Get(index *f64) DataSafeDiscoveryJobsResultModifiedAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSafeDiscoveryJobsResultModifiedAttributesOutputReference <a name="DataSafeDiscoveryJobsResultModifiedAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjobsresult"

datasafediscoveryjobsresult.NewDataSafeDiscoveryJobsResultModifiedAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSafeDiscoveryJobsResultModifiedAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.appDefinedChildColumnKeys">AppDefinedChildColumnKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys">DbDefinedChildColumnKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributes">DataSafeDiscoveryJobsResultModifiedAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppDefinedChildColumnKeys`<sup>Required</sup> <a name="AppDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.appDefinedChildColumnKeys"></a>

```go
func AppDefinedChildColumnKeys() *[]*string
```

- *Type:* *[]*string

---

##### `DbDefinedChildColumnKeys`<sup>Required</sup> <a name="DbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys"></a>

```go
func DbDefinedChildColumnKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSafeDiscoveryJobsResultModifiedAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributes">DataSafeDiscoveryJobsResultModifiedAttributes</a>

---


### DataSafeDiscoveryJobsResultTimeoutsOutputReference <a name="DataSafeDiscoveryJobsResultTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjobsresult"

datasafediscoveryjobsresult.NewDataSafeDiscoveryJobsResultTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeDiscoveryJobsResultTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



