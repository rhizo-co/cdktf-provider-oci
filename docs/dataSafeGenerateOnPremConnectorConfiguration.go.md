# `dataSafeGenerateOnPremConnectorConfiguration` Submodule <a name="`dataSafeGenerateOnPremConnectorConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeGenerateOnPremConnectorConfiguration <a name="DataSafeGenerateOnPremConnectorConfiguration" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration oci_data_safe_generate_on_prem_connector_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafegenerateonpremconnectorconfiguration"

datasafegenerateonpremconnectorconfiguration.NewDataSafeGenerateOnPremConnectorConfiguration(scope Construct, id *string, config DataSafeGenerateOnPremConnectorConfigurationConfig) DataSafeGenerateOnPremConnectorConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig">DataSafeGenerateOnPremConnectorConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig">DataSafeGenerateOnPremConnectorConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeGenerateOnPremConnectorConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts">DataSafeGenerateOnPremConnectorConfigurationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeGenerateOnPremConnectorConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafegenerateonpremconnectorconfiguration"

datasafegenerateonpremconnectorconfiguration.DataSafeGenerateOnPremConnectorConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafegenerateonpremconnectorconfiguration"

datasafegenerateonpremconnectorconfiguration.DataSafeGenerateOnPremConnectorConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafegenerateonpremconnectorconfiguration"

datasafegenerateonpremconnectorconfiguration.DataSafeGenerateOnPremConnectorConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafegenerateonpremconnectorconfiguration"

datasafegenerateonpremconnectorconfiguration.DataSafeGenerateOnPremConnectorConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeGenerateOnPremConnectorConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeGenerateOnPremConnectorConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeGenerateOnPremConnectorConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeGenerateOnPremConnectorConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference">DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.onPremConnectorIdInput">OnPremConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.onPremConnectorId">OnPremConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.password">Password</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.timeouts"></a>

```go
func Timeouts() DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference">DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OnPremConnectorIdInput`<sup>Optional</sup> <a name="OnPremConnectorIdInput" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.onPremConnectorIdInput"></a>

```go
func OnPremConnectorIdInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OnPremConnectorId`<sup>Required</sup> <a name="OnPremConnectorId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.onPremConnectorId"></a>

```go
func OnPremConnectorId() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeGenerateOnPremConnectorConfigurationConfig <a name="DataSafeGenerateOnPremConnectorConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafegenerateonpremconnectorconfiguration"

&datasafegenerateonpremconnectorconfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OnPremConnectorId: *string,
	Password: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.onPremConnectorId">OnPremConnectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#on_prem_connector_id DataSafeGenerateOnPremConnectorConfiguration#on_prem_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#password DataSafeGenerateOnPremConnectorConfiguration#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#id DataSafeGenerateOnPremConnectorConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts">DataSafeGenerateOnPremConnectorConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OnPremConnectorId`<sup>Required</sup> <a name="OnPremConnectorId" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.onPremConnectorId"></a>

```go
OnPremConnectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#on_prem_connector_id DataSafeGenerateOnPremConnectorConfiguration#on_prem_connector_id}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#password DataSafeGenerateOnPremConnectorConfiguration#password}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#id DataSafeGenerateOnPremConnectorConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationConfig.property.timeouts"></a>

```go
Timeouts DataSafeGenerateOnPremConnectorConfigurationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts">DataSafeGenerateOnPremConnectorConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#timeouts DataSafeGenerateOnPremConnectorConfiguration#timeouts}

---

### DataSafeGenerateOnPremConnectorConfigurationTimeouts <a name="DataSafeGenerateOnPremConnectorConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafegenerateonpremconnectorconfiguration"

&datasafegenerateonpremconnectorconfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#create DataSafeGenerateOnPremConnectorConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#delete DataSafeGenerateOnPremConnectorConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#update DataSafeGenerateOnPremConnectorConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#create DataSafeGenerateOnPremConnectorConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#delete DataSafeGenerateOnPremConnectorConfiguration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_generate_on_prem_connector_configuration#update DataSafeGenerateOnPremConnectorConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference <a name="DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafegenerateonpremconnectorconfiguration"

datasafegenerateonpremconnectorconfiguration.NewDataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeGenerateOnPremConnectorConfiguration.DataSafeGenerateOnPremConnectorConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



