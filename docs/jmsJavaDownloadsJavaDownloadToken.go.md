# `jmsJavaDownloadsJavaDownloadToken` Submodule <a name="`jmsJavaDownloadsJavaDownloadToken` Submodule" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JmsJavaDownloadsJavaDownloadToken <a name="JmsJavaDownloadsJavaDownloadToken" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token oci_jms_java_downloads_java_download_token}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/jmsjavadownloadsjavadownloadtoken"

jmsjavadownloadsjavadownloadtoken.NewJmsJavaDownloadsJavaDownloadToken(scope Construct, id *string, config JmsJavaDownloadsJavaDownloadTokenConfig) JmsJavaDownloadsJavaDownloadToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig">JmsJavaDownloadsJavaDownloadTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig">JmsJavaDownloadsJavaDownloadTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetIsDefault">ResetIsDefault</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.putTimeouts"></a>

```go
func PutTimeouts(value JmsJavaDownloadsJavaDownloadTokenTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetId"></a>

```go
func ResetId()
```

##### `ResetIsDefault` <a name="ResetIsDefault" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetIsDefault"></a>

```go
func ResetIsDefault()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a JmsJavaDownloadsJavaDownloadToken resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/jmsjavadownloadsjavadownloadtoken"

jmsjavadownloadsjavadownloadtoken.JmsJavaDownloadsJavaDownloadToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/jmsjavadownloadsjavadownloadtoken"

jmsjavadownloadsjavadownloadtoken.JmsJavaDownloadsJavaDownloadToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/jmsjavadownloadsjavadownloadtoken"

jmsjavadownloadsjavadownloadtoken.JmsJavaDownloadsJavaDownloadToken_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/jmsjavadownloadsjavadownloadtoken"

jmsjavadownloadsjavadownloadtoken.JmsJavaDownloadsJavaDownloadToken_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a JmsJavaDownloadsJavaDownloadToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the JmsJavaDownloadsJavaDownloadToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing JmsJavaDownloadsJavaDownloadToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the JmsJavaDownloadsJavaDownloadToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.createdBy">CreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList">JmsJavaDownloadsJavaDownloadTokenCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList">JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeLastUsed">TimeLastUsed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference">JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefaultInput">IsDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersionInput">JavaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpiresInput">TimeExpiresInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersion">JavaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseType">LicenseType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpires">TimeExpires</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.createdBy"></a>

```go
func CreatedBy() JmsJavaDownloadsJavaDownloadTokenCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList">JmsJavaDownloadsJavaDownloadTokenCreatedByList</a>

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lastUpdatedBy"></a>

```go
func LastUpdatedBy() JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList">JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastUsed`<sup>Required</sup> <a name="TimeLastUsed" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeLastUsed"></a>

```go
func TimeLastUsed() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeouts"></a>

```go
func Timeouts() JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference">JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefaultInput"></a>

```go
func IsDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `JavaVersionInput`<sup>Optional</sup> <a name="JavaVersionInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersionInput"></a>

```go
func JavaVersionInput() *string
```

- *Type:* *string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeExpiresInput`<sup>Optional</sup> <a name="TimeExpiresInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpiresInput"></a>

```go
func TimeExpiresInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefault"></a>

```go
func IsDefault() interface{}
```

- *Type:* interface{}

---

##### `JavaVersion`<sup>Required</sup> <a name="JavaVersion" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersion"></a>

```go
func JavaVersion() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseType"></a>

```go
func LicenseType() *[]*string
```

- *Type:* *[]*string

---

##### `TimeExpires`<sup>Required</sup> <a name="TimeExpires" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpires"></a>

```go
func TimeExpires() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### JmsJavaDownloadsJavaDownloadTokenConfig <a name="JmsJavaDownloadsJavaDownloadTokenConfig" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/jmsjavadownloadsjavadownloadtoken"

&jmsjavadownloadsjavadownloadtoken.JmsJavaDownloadsJavaDownloadTokenConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Description: *string,
	DisplayName: *string,
	JavaVersion: *string,
	LicenseType: *[]*string,
	TimeExpires: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsDefault: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#compartment_id JmsJavaDownloadsJavaDownloadToken#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#description JmsJavaDownloadsJavaDownloadToken#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#display_name JmsJavaDownloadsJavaDownloadToken#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.javaVersion">JavaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#java_version JmsJavaDownloadsJavaDownloadToken#java_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.licenseType">LicenseType</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#license_type JmsJavaDownloadsJavaDownloadToken#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeExpires">TimeExpires</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#time_expires JmsJavaDownloadsJavaDownloadToken#time_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#defined_tags JmsJavaDownloadsJavaDownloadToken#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#freeform_tags JmsJavaDownloadsJavaDownloadToken#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#id JmsJavaDownloadsJavaDownloadToken#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#is_default JmsJavaDownloadsJavaDownloadToken#is_default}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#compartment_id JmsJavaDownloadsJavaDownloadToken#compartment_id}.

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#description JmsJavaDownloadsJavaDownloadToken#description}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#display_name JmsJavaDownloadsJavaDownloadToken#display_name}.

---

##### `JavaVersion`<sup>Required</sup> <a name="JavaVersion" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.javaVersion"></a>

```go
JavaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#java_version JmsJavaDownloadsJavaDownloadToken#java_version}.

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.licenseType"></a>

```go
LicenseType *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#license_type JmsJavaDownloadsJavaDownloadToken#license_type}.

---

##### `TimeExpires`<sup>Required</sup> <a name="TimeExpires" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeExpires"></a>

```go
TimeExpires *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#time_expires JmsJavaDownloadsJavaDownloadToken#time_expires}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#defined_tags JmsJavaDownloadsJavaDownloadToken#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#freeform_tags JmsJavaDownloadsJavaDownloadToken#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#id JmsJavaDownloadsJavaDownloadToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDefault`<sup>Optional</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.isDefault"></a>

```go
IsDefault interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#is_default JmsJavaDownloadsJavaDownloadToken#is_default}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeouts"></a>

```go
Timeouts JmsJavaDownloadsJavaDownloadTokenTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#timeouts JmsJavaDownloadsJavaDownloadToken#timeouts}

---

### JmsJavaDownloadsJavaDownloadTokenCreatedBy <a name="JmsJavaDownloadsJavaDownloadTokenCreatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/jmsjavadownloadsjavadownloadtoken"

&jmsjavadownloadsjavadownloadtoken.JmsJavaDownloadsJavaDownloadTokenCreatedBy {

}
```


### JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy <a name="JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/jmsjavadownloadsjavadownloadtoken"

&jmsjavadownloadsjavadownloadtoken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy {

}
```


### JmsJavaDownloadsJavaDownloadTokenTimeouts <a name="JmsJavaDownloadsJavaDownloadTokenTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/jmsjavadownloadsjavadownloadtoken"

&jmsjavadownloadsjavadownloadtoken.JmsJavaDownloadsJavaDownloadTokenTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#create JmsJavaDownloadsJavaDownloadToken#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#delete JmsJavaDownloadsJavaDownloadToken#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#update JmsJavaDownloadsJavaDownloadToken#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#create JmsJavaDownloadsJavaDownloadToken#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#delete JmsJavaDownloadsJavaDownloadToken#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#update JmsJavaDownloadsJavaDownloadToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JmsJavaDownloadsJavaDownloadTokenCreatedByList <a name="JmsJavaDownloadsJavaDownloadTokenCreatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/jmsjavadownloadsjavadownloadtoken"

jmsjavadownloadsjavadownloadtoken.NewJmsJavaDownloadsJavaDownloadTokenCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) JmsJavaDownloadsJavaDownloadTokenCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.get"></a>

```go
func Get(index *f64) JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference <a name="JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/jmsjavadownloadsjavadownloadtoken"

jmsjavadownloadsjavadownloadtoken.NewJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy">JmsJavaDownloadsJavaDownloadTokenCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() JmsJavaDownloadsJavaDownloadTokenCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy">JmsJavaDownloadsJavaDownloadTokenCreatedBy</a>

---


### JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList <a name="JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/jmsjavadownloadsjavadownloadtoken"

jmsjavadownloadsjavadownloadtoken.NewJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get"></a>

```go
func Get(index *f64) JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference <a name="JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/jmsjavadownloadsjavadownloadtoken"

jmsjavadownloadsjavadownloadtoken.NewJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy">JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy">JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy</a>

---


### JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference <a name="JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/jmsjavadownloadsjavadownloadtoken"

jmsjavadownloadsjavadownloadtoken.NewJmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



