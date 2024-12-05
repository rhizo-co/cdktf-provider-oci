# `analyticsAnalyticsInstanceVanityUrl` Submodule <a name="`analyticsAnalyticsInstanceVanityUrl` Submodule" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnalyticsAnalyticsInstanceVanityUrl <a name="AnalyticsAnalyticsInstanceVanityUrl" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url oci_analytics_analytics_instance_vanity_url}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/analyticsanalyticsinstancevanityurl"

analyticsanalyticsinstancevanityurl.NewAnalyticsAnalyticsInstanceVanityUrl(scope Construct, id *string, config AnalyticsAnalyticsInstanceVanityUrlConfig) AnalyticsAnalyticsInstanceVanityUrl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig">AnalyticsAnalyticsInstanceVanityUrlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig">AnalyticsAnalyticsInstanceVanityUrlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetPassphrase">ResetPassphrase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.putTimeouts"></a>

```go
func PutTimeouts(value AnalyticsAnalyticsInstanceVanityUrlTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts">AnalyticsAnalyticsInstanceVanityUrlTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetId"></a>

```go
func ResetId()
```

##### `ResetPassphrase` <a name="ResetPassphrase" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetPassphrase"></a>

```go
func ResetPassphrase()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AnalyticsAnalyticsInstanceVanityUrl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/analyticsanalyticsinstancevanityurl"

analyticsanalyticsinstancevanityurl.AnalyticsAnalyticsInstanceVanityUrl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/analyticsanalyticsinstancevanityurl"

analyticsanalyticsinstancevanityurl.AnalyticsAnalyticsInstanceVanityUrl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/analyticsanalyticsinstancevanityurl"

analyticsanalyticsinstancevanityurl.AnalyticsAnalyticsInstanceVanityUrl_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/analyticsanalyticsinstancevanityurl"

analyticsanalyticsinstancevanityurl.AnalyticsAnalyticsInstanceVanityUrl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AnalyticsAnalyticsInstanceVanityUrl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AnalyticsAnalyticsInstanceVanityUrl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AnalyticsAnalyticsInstanceVanityUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AnalyticsAnalyticsInstanceVanityUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference">AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.analyticsInstanceIdInput">AnalyticsInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.caCertificateInput">CaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.hostsInput">HostsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.passphraseInput">PassphraseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.publicCertificateInput">PublicCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.analyticsInstanceId">AnalyticsInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.hosts">Hosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.passphrase">Passphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.publicCertificate">PublicCertificate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.timeouts"></a>

```go
func Timeouts() AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference">AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference</a>

---

##### `AnalyticsInstanceIdInput`<sup>Optional</sup> <a name="AnalyticsInstanceIdInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.analyticsInstanceIdInput"></a>

```go
func AnalyticsInstanceIdInput() *string
```

- *Type:* *string

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.caCertificateInput"></a>

```go
func CaCertificateInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.hostsInput"></a>

```go
func HostsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PassphraseInput`<sup>Optional</sup> <a name="PassphraseInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.passphraseInput"></a>

```go
func PassphraseInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `PublicCertificateInput`<sup>Optional</sup> <a name="PublicCertificateInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.publicCertificateInput"></a>

```go
func PublicCertificateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AnalyticsInstanceId`<sup>Required</sup> <a name="AnalyticsInstanceId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.analyticsInstanceId"></a>

```go
func AnalyticsInstanceId() *string
```

- *Type:* *string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.hosts"></a>

```go
func Hosts() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.passphrase"></a>

```go
func Passphrase() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PublicCertificate`<sup>Required</sup> <a name="PublicCertificate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.publicCertificate"></a>

```go
func PublicCertificate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AnalyticsAnalyticsInstanceVanityUrlConfig <a name="AnalyticsAnalyticsInstanceVanityUrlConfig" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/analyticsanalyticsinstancevanityurl"

&analyticsanalyticsinstancevanityurl.AnalyticsAnalyticsInstanceVanityUrlConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AnalyticsInstanceId: *string,
	CaCertificate: *string,
	Hosts: *[]*string,
	PrivateKey: *string,
	PublicCertificate: *string,
	Description: *string,
	Id: *string,
	Passphrase: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.analyticsInstanceId">AnalyticsInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#analytics_instance_id AnalyticsAnalyticsInstanceVanityUrl#analytics_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#ca_certificate AnalyticsAnalyticsInstanceVanityUrl#ca_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.hosts">Hosts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#hosts AnalyticsAnalyticsInstanceVanityUrl#hosts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#private_key AnalyticsAnalyticsInstanceVanityUrl#private_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.publicCertificate">PublicCertificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#public_certificate AnalyticsAnalyticsInstanceVanityUrl#public_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#description AnalyticsAnalyticsInstanceVanityUrl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#id AnalyticsAnalyticsInstanceVanityUrl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.passphrase">Passphrase</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#passphrase AnalyticsAnalyticsInstanceVanityUrl#passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts">AnalyticsAnalyticsInstanceVanityUrlTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnalyticsInstanceId`<sup>Required</sup> <a name="AnalyticsInstanceId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.analyticsInstanceId"></a>

```go
AnalyticsInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#analytics_instance_id AnalyticsAnalyticsInstanceVanityUrl#analytics_instance_id}.

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.caCertificate"></a>

```go
CaCertificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#ca_certificate AnalyticsAnalyticsInstanceVanityUrl#ca_certificate}.

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.hosts"></a>

```go
Hosts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#hosts AnalyticsAnalyticsInstanceVanityUrl#hosts}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#private_key AnalyticsAnalyticsInstanceVanityUrl#private_key}.

---

##### `PublicCertificate`<sup>Required</sup> <a name="PublicCertificate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.publicCertificate"></a>

```go
PublicCertificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#public_certificate AnalyticsAnalyticsInstanceVanityUrl#public_certificate}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#description AnalyticsAnalyticsInstanceVanityUrl#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#id AnalyticsAnalyticsInstanceVanityUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Passphrase`<sup>Optional</sup> <a name="Passphrase" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.passphrase"></a>

```go
Passphrase *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#passphrase AnalyticsAnalyticsInstanceVanityUrl#passphrase}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.timeouts"></a>

```go
Timeouts AnalyticsAnalyticsInstanceVanityUrlTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts">AnalyticsAnalyticsInstanceVanityUrlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#timeouts AnalyticsAnalyticsInstanceVanityUrl#timeouts}

---

### AnalyticsAnalyticsInstanceVanityUrlTimeouts <a name="AnalyticsAnalyticsInstanceVanityUrlTimeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/analyticsanalyticsinstancevanityurl"

&analyticsanalyticsinstancevanityurl.AnalyticsAnalyticsInstanceVanityUrlTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#create AnalyticsAnalyticsInstanceVanityUrl#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#delete AnalyticsAnalyticsInstanceVanityUrl#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#update AnalyticsAnalyticsInstanceVanityUrl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#create AnalyticsAnalyticsInstanceVanityUrl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#delete AnalyticsAnalyticsInstanceVanityUrl#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#update AnalyticsAnalyticsInstanceVanityUrl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference <a name="AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/analyticsanalyticsinstancevanityurl"

analyticsanalyticsinstancevanityurl.NewAnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



