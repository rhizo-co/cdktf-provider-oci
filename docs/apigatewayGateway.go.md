# `apigatewayGateway` Submodule <a name="`apigatewayGateway` Submodule" id="rhizo-co-terraform-provider-oci.apigatewayGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayGateway <a name="ApigatewayGateway" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway oci_apigateway_gateway}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

apigatewaygateway.NewApigatewayGateway(scope Construct, id *string, config ApigatewayGatewayConfig) ApigatewayGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig">ApigatewayGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig">ApigatewayGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putCaBundles">PutCaBundles</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putResponseCacheDetails">PutResponseCacheDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetCaBundles">ResetCaBundles</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetNetworkSecurityGroupIds">ResetNetworkSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetResponseCacheDetails">ResetResponseCacheDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCaBundles` <a name="PutCaBundles" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putCaBundles"></a>

```go
func PutCaBundles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putCaBundles.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResponseCacheDetails` <a name="PutResponseCacheDetails" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putResponseCacheDetails"></a>

```go
func PutResponseCacheDetails(value ApigatewayGatewayResponseCacheDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putResponseCacheDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putTimeouts"></a>

```go
func PutTimeouts(value ApigatewayGatewayTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts">ApigatewayGatewayTimeouts</a>

---

##### `ResetCaBundles` <a name="ResetCaBundles" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetCaBundles"></a>

```go
func ResetCaBundles()
```

##### `ResetCertificateId` <a name="ResetCertificateId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetCertificateId"></a>

```go
func ResetCertificateId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkSecurityGroupIds` <a name="ResetNetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetNetworkSecurityGroupIds"></a>

```go
func ResetNetworkSecurityGroupIds()
```

##### `ResetResponseCacheDetails` <a name="ResetResponseCacheDetails" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetResponseCacheDetails"></a>

```go
func ResetResponseCacheDetails()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigatewayGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

apigatewaygateway.ApigatewayGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

apigatewaygateway.ApigatewayGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

apigatewaygateway.ApigatewayGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

apigatewaygateway.ApigatewayGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApigatewayGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigatewayGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigatewayGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApigatewayGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.caBundles">CaBundles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList">ApigatewayGatewayCaBundlesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.ipAddresses">IpAddresses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList">ApigatewayGatewayIpAddressesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.responseCacheDetails">ResponseCacheDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference">ApigatewayGatewayResponseCacheDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference">ApigatewayGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.caBundlesInput">CaBundlesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.certificateIdInput">CertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.networkSecurityGroupIdsInput">NetworkSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.responseCacheDetailsInput">ResponseCacheDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.networkSecurityGroupIds">NetworkSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaBundles`<sup>Required</sup> <a name="CaBundles" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.caBundles"></a>

```go
func CaBundles() ApigatewayGatewayCaBundlesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList">ApigatewayGatewayCaBundlesList</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.ipAddresses"></a>

```go
func IpAddresses() ApigatewayGatewayIpAddressesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList">ApigatewayGatewayIpAddressesList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ResponseCacheDetails`<sup>Required</sup> <a name="ResponseCacheDetails" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.responseCacheDetails"></a>

```go
func ResponseCacheDetails() ApigatewayGatewayResponseCacheDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference">ApigatewayGatewayResponseCacheDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeouts"></a>

```go
func Timeouts() ApigatewayGatewayTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference">ApigatewayGatewayTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CaBundlesInput`<sup>Optional</sup> <a name="CaBundlesInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.caBundlesInput"></a>

```go
func CaBundlesInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.certificateIdInput"></a>

```go
func CertificateIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkSecurityGroupIdsInput`<sup>Optional</sup> <a name="NetworkSecurityGroupIdsInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.networkSecurityGroupIdsInput"></a>

```go
func NetworkSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseCacheDetailsInput`<sup>Optional</sup> <a name="ResponseCacheDetailsInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.responseCacheDetailsInput"></a>

```go
func ResponseCacheDetailsInput() ApigatewayGatewayResponseCacheDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a>

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkSecurityGroupIds`<sup>Required</sup> <a name="NetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.networkSecurityGroupIds"></a>

```go
func NetworkSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayGatewayCaBundles <a name="ApigatewayGatewayCaBundles" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

&apigatewaygateway.ApigatewayGatewayCaBundles {
	Type: *string,
	CaBundleId: *string,
	CertificateAuthorityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#type ApigatewayGateway#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles.property.caBundleId">CaBundleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#ca_bundle_id ApigatewayGateway#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#certificate_authority_id ApigatewayGateway#certificate_authority_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#type ApigatewayGateway#type}.

---

##### `CaBundleId`<sup>Optional</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles.property.caBundleId"></a>

```go
CaBundleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#ca_bundle_id ApigatewayGateway#ca_bundle_id}.

---

##### `CertificateAuthorityId`<sup>Optional</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundles.property.certificateAuthorityId"></a>

```go
CertificateAuthorityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#certificate_authority_id ApigatewayGateway#certificate_authority_id}.

---

### ApigatewayGatewayConfig <a name="ApigatewayGatewayConfig" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

&apigatewaygateway.ApigatewayGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	EndpointType: *string,
	SubnetId: *string,
	CaBundles: interface{},
	CertificateId: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	NetworkSecurityGroupIds: *[]*string,
	ResponseCacheDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.apigatewayGateway.ApigatewayGatewayTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#compartment_id ApigatewayGateway#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.endpointType">EndpointType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#endpoint_type ApigatewayGateway#endpoint_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#subnet_id ApigatewayGateway#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.caBundles">CaBundles</a></code> | <code>interface{}</code> | ca_bundles block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.certificateId">CertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#certificate_id ApigatewayGateway#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#defined_tags ApigatewayGateway#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#display_name ApigatewayGateway#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#freeform_tags ApigatewayGateway#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#id ApigatewayGateway#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.networkSecurityGroupIds">NetworkSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#network_security_group_ids ApigatewayGateway#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.responseCacheDetails">ResponseCacheDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a></code> | response_cache_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts">ApigatewayGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#compartment_id ApigatewayGateway#compartment_id}.

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#endpoint_type ApigatewayGateway#endpoint_type}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#subnet_id ApigatewayGateway#subnet_id}.

---

##### `CaBundles`<sup>Optional</sup> <a name="CaBundles" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.caBundles"></a>

```go
CaBundles interface{}
```

- *Type:* interface{}

ca_bundles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#ca_bundles ApigatewayGateway#ca_bundles}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.certificateId"></a>

```go
CertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#certificate_id ApigatewayGateway#certificate_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#defined_tags ApigatewayGateway#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#display_name ApigatewayGateway#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#freeform_tags ApigatewayGateway#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#id ApigatewayGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkSecurityGroupIds`<sup>Optional</sup> <a name="NetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.networkSecurityGroupIds"></a>

```go
NetworkSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#network_security_group_ids ApigatewayGateway#network_security_group_ids}.

---

##### `ResponseCacheDetails`<sup>Optional</sup> <a name="ResponseCacheDetails" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.responseCacheDetails"></a>

```go
ResponseCacheDetails ApigatewayGatewayResponseCacheDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a>

response_cache_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#response_cache_details ApigatewayGateway#response_cache_details}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayConfig.property.timeouts"></a>

```go
Timeouts ApigatewayGatewayTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts">ApigatewayGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#timeouts ApigatewayGateway#timeouts}

---

### ApigatewayGatewayIpAddresses <a name="ApigatewayGatewayIpAddresses" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddresses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddresses.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

&apigatewaygateway.ApigatewayGatewayIpAddresses {

}
```


### ApigatewayGatewayResponseCacheDetails <a name="ApigatewayGatewayResponseCacheDetails" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

&apigatewaygateway.ApigatewayGatewayResponseCacheDetails {
	Type: *string,
	AuthenticationSecretId: *string,
	AuthenticationSecretVersionNumber: *string,
	ConnectTimeoutInMs: *f64,
	IsSslEnabled: interface{},
	IsSslVerifyDisabled: interface{},
	ReadTimeoutInMs: *f64,
	SendTimeoutInMs: *f64,
	Servers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#type ApigatewayGateway#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.authenticationSecretId">AuthenticationSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#authentication_secret_id ApigatewayGateway#authentication_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.authenticationSecretVersionNumber">AuthenticationSecretVersionNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#authentication_secret_version_number ApigatewayGateway#authentication_secret_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.connectTimeoutInMs">ConnectTimeoutInMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#connect_timeout_in_ms ApigatewayGateway#connect_timeout_in_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.isSslEnabled">IsSslEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#is_ssl_enabled ApigatewayGateway#is_ssl_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.isSslVerifyDisabled">IsSslVerifyDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#is_ssl_verify_disabled ApigatewayGateway#is_ssl_verify_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.readTimeoutInMs">ReadTimeoutInMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#read_timeout_in_ms ApigatewayGateway#read_timeout_in_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.sendTimeoutInMs">SendTimeoutInMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#send_timeout_in_ms ApigatewayGateway#send_timeout_in_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.servers">Servers</a></code> | <code>interface{}</code> | servers block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#type ApigatewayGateway#type}.

---

##### `AuthenticationSecretId`<sup>Optional</sup> <a name="AuthenticationSecretId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.authenticationSecretId"></a>

```go
AuthenticationSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#authentication_secret_id ApigatewayGateway#authentication_secret_id}.

---

##### `AuthenticationSecretVersionNumber`<sup>Optional</sup> <a name="AuthenticationSecretVersionNumber" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.authenticationSecretVersionNumber"></a>

```go
AuthenticationSecretVersionNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#authentication_secret_version_number ApigatewayGateway#authentication_secret_version_number}.

---

##### `ConnectTimeoutInMs`<sup>Optional</sup> <a name="ConnectTimeoutInMs" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.connectTimeoutInMs"></a>

```go
ConnectTimeoutInMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#connect_timeout_in_ms ApigatewayGateway#connect_timeout_in_ms}.

---

##### `IsSslEnabled`<sup>Optional</sup> <a name="IsSslEnabled" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.isSslEnabled"></a>

```go
IsSslEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#is_ssl_enabled ApigatewayGateway#is_ssl_enabled}.

---

##### `IsSslVerifyDisabled`<sup>Optional</sup> <a name="IsSslVerifyDisabled" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.isSslVerifyDisabled"></a>

```go
IsSslVerifyDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#is_ssl_verify_disabled ApigatewayGateway#is_ssl_verify_disabled}.

---

##### `ReadTimeoutInMs`<sup>Optional</sup> <a name="ReadTimeoutInMs" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.readTimeoutInMs"></a>

```go
ReadTimeoutInMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#read_timeout_in_ms ApigatewayGateway#read_timeout_in_ms}.

---

##### `SendTimeoutInMs`<sup>Optional</sup> <a name="SendTimeoutInMs" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.sendTimeoutInMs"></a>

```go
SendTimeoutInMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#send_timeout_in_ms ApigatewayGateway#send_timeout_in_ms}.

---

##### `Servers`<sup>Optional</sup> <a name="Servers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails.property.servers"></a>

```go
Servers interface{}
```

- *Type:* interface{}

servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#servers ApigatewayGateway#servers}

---

### ApigatewayGatewayResponseCacheDetailsServers <a name="ApigatewayGatewayResponseCacheDetailsServers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

&apigatewaygateway.ApigatewayGatewayResponseCacheDetailsServers {
	Host: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers.property.host">Host</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#host ApigatewayGateway#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#port ApigatewayGateway#port}. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers.property.host"></a>

```go
Host *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#host ApigatewayGateway#host}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServers.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#port ApigatewayGateway#port}.

---

### ApigatewayGatewayTimeouts <a name="ApigatewayGatewayTimeouts" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

&apigatewaygateway.ApigatewayGatewayTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#create ApigatewayGateway#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#delete ApigatewayGateway#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#update ApigatewayGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#create ApigatewayGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#delete ApigatewayGateway#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_gateway#update ApigatewayGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayGatewayCaBundlesList <a name="ApigatewayGatewayCaBundlesList" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

apigatewaygateway.NewApigatewayGatewayCaBundlesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigatewayGatewayCaBundlesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.get"></a>

```go
func Get(index *f64) ApigatewayGatewayCaBundlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayGatewayCaBundlesOutputReference <a name="ApigatewayGatewayCaBundlesOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

apigatewaygateway.NewApigatewayGatewayCaBundlesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigatewayGatewayCaBundlesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.resetCaBundleId">ResetCaBundleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.resetCertificateAuthorityId">ResetCertificateAuthorityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaBundleId` <a name="ResetCaBundleId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.resetCaBundleId"></a>

```go
func ResetCaBundleId()
```

##### `ResetCertificateAuthorityId` <a name="ResetCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.resetCertificateAuthorityId"></a>

```go
func ResetCertificateAuthorityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.caBundleIdInput">CaBundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.certificateAuthorityIdInput">CertificateAuthorityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.caBundleId">CaBundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaBundleIdInput`<sup>Optional</sup> <a name="CaBundleIdInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.caBundleIdInput"></a>

```go
func CaBundleIdInput() *string
```

- *Type:* *string

---

##### `CertificateAuthorityIdInput`<sup>Optional</sup> <a name="CertificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.certificateAuthorityIdInput"></a>

```go
func CertificateAuthorityIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CaBundleId`<sup>Required</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.caBundleId"></a>

```go
func CaBundleId() *string
```

- *Type:* *string

---

##### `CertificateAuthorityId`<sup>Required</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.certificateAuthorityId"></a>

```go
func CertificateAuthorityId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayCaBundlesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayGatewayIpAddressesList <a name="ApigatewayGatewayIpAddressesList" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

apigatewaygateway.NewApigatewayGatewayIpAddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigatewayGatewayIpAddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.get"></a>

```go
func Get(index *f64) ApigatewayGatewayIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApigatewayGatewayIpAddressesOutputReference <a name="ApigatewayGatewayIpAddressesOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

apigatewaygateway.NewApigatewayGatewayIpAddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigatewayGatewayIpAddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddresses">ApigatewayGatewayIpAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigatewayGatewayIpAddresses
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayIpAddresses">ApigatewayGatewayIpAddresses</a>

---


### ApigatewayGatewayResponseCacheDetailsOutputReference <a name="ApigatewayGatewayResponseCacheDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

apigatewaygateway.NewApigatewayGatewayResponseCacheDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigatewayGatewayResponseCacheDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.putServers">PutServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetAuthenticationSecretId">ResetAuthenticationSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetAuthenticationSecretVersionNumber">ResetAuthenticationSecretVersionNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetConnectTimeoutInMs">ResetConnectTimeoutInMs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetIsSslEnabled">ResetIsSslEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetIsSslVerifyDisabled">ResetIsSslVerifyDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetReadTimeoutInMs">ResetReadTimeoutInMs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetSendTimeoutInMs">ResetSendTimeoutInMs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetServers">ResetServers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServers` <a name="PutServers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.putServers"></a>

```go
func PutServers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.putServers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthenticationSecretId` <a name="ResetAuthenticationSecretId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetAuthenticationSecretId"></a>

```go
func ResetAuthenticationSecretId()
```

##### `ResetAuthenticationSecretVersionNumber` <a name="ResetAuthenticationSecretVersionNumber" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetAuthenticationSecretVersionNumber"></a>

```go
func ResetAuthenticationSecretVersionNumber()
```

##### `ResetConnectTimeoutInMs` <a name="ResetConnectTimeoutInMs" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetConnectTimeoutInMs"></a>

```go
func ResetConnectTimeoutInMs()
```

##### `ResetIsSslEnabled` <a name="ResetIsSslEnabled" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetIsSslEnabled"></a>

```go
func ResetIsSslEnabled()
```

##### `ResetIsSslVerifyDisabled` <a name="ResetIsSslVerifyDisabled" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetIsSslVerifyDisabled"></a>

```go
func ResetIsSslVerifyDisabled()
```

##### `ResetReadTimeoutInMs` <a name="ResetReadTimeoutInMs" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetReadTimeoutInMs"></a>

```go
func ResetReadTimeoutInMs()
```

##### `ResetSendTimeoutInMs` <a name="ResetSendTimeoutInMs" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetSendTimeoutInMs"></a>

```go
func ResetSendTimeoutInMs()
```

##### `ResetServers` <a name="ResetServers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.resetServers"></a>

```go
func ResetServers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.servers">Servers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList">ApigatewayGatewayResponseCacheDetailsServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretIdInput">AuthenticationSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretVersionNumberInput">AuthenticationSecretVersionNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.connectTimeoutInMsInput">ConnectTimeoutInMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslEnabledInput">IsSslEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslVerifyDisabledInput">IsSslVerifyDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.readTimeoutInMsInput">ReadTimeoutInMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.sendTimeoutInMsInput">SendTimeoutInMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.serversInput">ServersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretId">AuthenticationSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretVersionNumber">AuthenticationSecretVersionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.connectTimeoutInMs">ConnectTimeoutInMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslEnabled">IsSslEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslVerifyDisabled">IsSslVerifyDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.readTimeoutInMs">ReadTimeoutInMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.sendTimeoutInMs">SendTimeoutInMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.servers"></a>

```go
func Servers() ApigatewayGatewayResponseCacheDetailsServersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList">ApigatewayGatewayResponseCacheDetailsServersList</a>

---

##### `AuthenticationSecretIdInput`<sup>Optional</sup> <a name="AuthenticationSecretIdInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretIdInput"></a>

```go
func AuthenticationSecretIdInput() *string
```

- *Type:* *string

---

##### `AuthenticationSecretVersionNumberInput`<sup>Optional</sup> <a name="AuthenticationSecretVersionNumberInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretVersionNumberInput"></a>

```go
func AuthenticationSecretVersionNumberInput() *string
```

- *Type:* *string

---

##### `ConnectTimeoutInMsInput`<sup>Optional</sup> <a name="ConnectTimeoutInMsInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.connectTimeoutInMsInput"></a>

```go
func ConnectTimeoutInMsInput() *f64
```

- *Type:* *f64

---

##### `IsSslEnabledInput`<sup>Optional</sup> <a name="IsSslEnabledInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslEnabledInput"></a>

```go
func IsSslEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsSslVerifyDisabledInput`<sup>Optional</sup> <a name="IsSslVerifyDisabledInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslVerifyDisabledInput"></a>

```go
func IsSslVerifyDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReadTimeoutInMsInput`<sup>Optional</sup> <a name="ReadTimeoutInMsInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.readTimeoutInMsInput"></a>

```go
func ReadTimeoutInMsInput() *f64
```

- *Type:* *f64

---

##### `SendTimeoutInMsInput`<sup>Optional</sup> <a name="SendTimeoutInMsInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.sendTimeoutInMsInput"></a>

```go
func SendTimeoutInMsInput() *f64
```

- *Type:* *f64

---

##### `ServersInput`<sup>Optional</sup> <a name="ServersInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.serversInput"></a>

```go
func ServersInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AuthenticationSecretId`<sup>Required</sup> <a name="AuthenticationSecretId" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretId"></a>

```go
func AuthenticationSecretId() *string
```

- *Type:* *string

---

##### `AuthenticationSecretVersionNumber`<sup>Required</sup> <a name="AuthenticationSecretVersionNumber" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretVersionNumber"></a>

```go
func AuthenticationSecretVersionNumber() *string
```

- *Type:* *string

---

##### `ConnectTimeoutInMs`<sup>Required</sup> <a name="ConnectTimeoutInMs" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.connectTimeoutInMs"></a>

```go
func ConnectTimeoutInMs() *f64
```

- *Type:* *f64

---

##### `IsSslEnabled`<sup>Required</sup> <a name="IsSslEnabled" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslEnabled"></a>

```go
func IsSslEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsSslVerifyDisabled`<sup>Required</sup> <a name="IsSslVerifyDisabled" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslVerifyDisabled"></a>

```go
func IsSslVerifyDisabled() interface{}
```

- *Type:* interface{}

---

##### `ReadTimeoutInMs`<sup>Required</sup> <a name="ReadTimeoutInMs" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.readTimeoutInMs"></a>

```go
func ReadTimeoutInMs() *f64
```

- *Type:* *f64

---

##### `SendTimeoutInMs`<sup>Required</sup> <a name="SendTimeoutInMs" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.sendTimeoutInMs"></a>

```go
func SendTimeoutInMs() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigatewayGatewayResponseCacheDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetails">ApigatewayGatewayResponseCacheDetails</a>

---


### ApigatewayGatewayResponseCacheDetailsServersList <a name="ApigatewayGatewayResponseCacheDetailsServersList" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

apigatewaygateway.NewApigatewayGatewayResponseCacheDetailsServersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigatewayGatewayResponseCacheDetailsServersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.get"></a>

```go
func Get(index *f64) ApigatewayGatewayResponseCacheDetailsServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayGatewayResponseCacheDetailsServersOutputReference <a name="ApigatewayGatewayResponseCacheDetailsServersOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

apigatewaygateway.NewApigatewayGatewayResponseCacheDetailsServersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigatewayGatewayResponseCacheDetailsServersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayResponseCacheDetailsServersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayGatewayTimeoutsOutputReference <a name="ApigatewayGatewayTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apigatewaygateway"

apigatewaygateway.NewApigatewayGatewayTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigatewayGatewayTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apigatewayGateway.ApigatewayGatewayTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



