# `dataOciApigatewayGateway` Submodule <a name="`dataOciApigatewayGateway` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApigatewayGateway <a name="DataOciApigatewayGateway" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateway oci_apigateway_gateway}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

dataociapigatewaygateway.NewDataOciApigatewayGateway(scope Construct, id *string, config DataOciApigatewayGatewayConfig) DataOciApigatewayGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig">DataOciApigatewayGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig">DataOciApigatewayGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApigatewayGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

dataociapigatewaygateway.DataOciApigatewayGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

dataociapigatewaygateway.DataOciApigatewayGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

dataociapigatewaygateway.DataOciApigatewayGateway_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

dataociapigatewaygateway.DataOciApigatewayGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciApigatewayGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciApigatewayGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciApigatewayGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApigatewayGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.caBundles">CaBundles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList">DataOciApigatewayGatewayCaBundlesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.ipAddresses">IpAddresses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList">DataOciApigatewayGatewayIpAddressesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.networkSecurityGroupIds">NetworkSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.responseCacheDetails">ResponseCacheDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList">DataOciApigatewayGatewayResponseCacheDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.gatewayIdInput">GatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CaBundles`<sup>Required</sup> <a name="CaBundles" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.caBundles"></a>

```go
func CaBundles() DataOciApigatewayGatewayCaBundlesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList">DataOciApigatewayGatewayCaBundlesList</a>

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.ipAddresses"></a>

```go
func IpAddresses() DataOciApigatewayGatewayIpAddressesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList">DataOciApigatewayGatewayIpAddressesList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NetworkSecurityGroupIds`<sup>Required</sup> <a name="NetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.networkSecurityGroupIds"></a>

```go
func NetworkSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseCacheDetails`<sup>Required</sup> <a name="ResponseCacheDetails" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.responseCacheDetails"></a>

```go
func ResponseCacheDetails() DataOciApigatewayGatewayResponseCacheDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList">DataOciApigatewayGatewayResponseCacheDetailsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.gatewayIdInput"></a>

```go
func GatewayIdInput() *string
```

- *Type:* *string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApigatewayGatewayCaBundles <a name="DataOciApigatewayGatewayCaBundles" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundles.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

&dataociapigatewaygateway.DataOciApigatewayGatewayCaBundles {

}
```


### DataOciApigatewayGatewayConfig <a name="DataOciApigatewayGatewayConfig" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

&dataociapigatewaygateway.DataOciApigatewayGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GatewayId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.gatewayId">GatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateway#gateway_id DataOciApigatewayGateway#gateway_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayConfig.property.gatewayId"></a>

```go
GatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateway#gateway_id DataOciApigatewayGateway#gateway_id}.

---

### DataOciApigatewayGatewayIpAddresses <a name="DataOciApigatewayGatewayIpAddresses" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddresses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddresses.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

&dataociapigatewaygateway.DataOciApigatewayGatewayIpAddresses {

}
```


### DataOciApigatewayGatewayResponseCacheDetails <a name="DataOciApigatewayGatewayResponseCacheDetails" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

&dataociapigatewaygateway.DataOciApigatewayGatewayResponseCacheDetails {

}
```


### DataOciApigatewayGatewayResponseCacheDetailsServers <a name="DataOciApigatewayGatewayResponseCacheDetailsServers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

&dataociapigatewaygateway.DataOciApigatewayGatewayResponseCacheDetailsServers {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApigatewayGatewayCaBundlesList <a name="DataOciApigatewayGatewayCaBundlesList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

dataociapigatewaygateway.NewDataOciApigatewayGatewayCaBundlesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApigatewayGatewayCaBundlesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.get"></a>

```go
func Get(index *f64) DataOciApigatewayGatewayCaBundlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApigatewayGatewayCaBundlesOutputReference <a name="DataOciApigatewayGatewayCaBundlesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

dataociapigatewaygateway.NewDataOciApigatewayGatewayCaBundlesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApigatewayGatewayCaBundlesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.property.caBundleId">CaBundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundles">DataOciApigatewayGatewayCaBundles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaBundleId`<sup>Required</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.property.caBundleId"></a>

```go
func CaBundleId() *string
```

- *Type:* *string

---

##### `CertificateAuthorityId`<sup>Required</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.property.certificateAuthorityId"></a>

```go
func CertificateAuthorityId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundlesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApigatewayGatewayCaBundles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayCaBundles">DataOciApigatewayGatewayCaBundles</a>

---


### DataOciApigatewayGatewayIpAddressesList <a name="DataOciApigatewayGatewayIpAddressesList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

dataociapigatewaygateway.NewDataOciApigatewayGatewayIpAddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApigatewayGatewayIpAddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.get"></a>

```go
func Get(index *f64) DataOciApigatewayGatewayIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApigatewayGatewayIpAddressesOutputReference <a name="DataOciApigatewayGatewayIpAddressesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

dataociapigatewaygateway.NewDataOciApigatewayGatewayIpAddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApigatewayGatewayIpAddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddresses">DataOciApigatewayGatewayIpAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApigatewayGatewayIpAddresses
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayIpAddresses">DataOciApigatewayGatewayIpAddresses</a>

---


### DataOciApigatewayGatewayResponseCacheDetailsList <a name="DataOciApigatewayGatewayResponseCacheDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

dataociapigatewaygateway.NewDataOciApigatewayGatewayResponseCacheDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApigatewayGatewayResponseCacheDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.get"></a>

```go
func Get(index *f64) DataOciApigatewayGatewayResponseCacheDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApigatewayGatewayResponseCacheDetailsOutputReference <a name="DataOciApigatewayGatewayResponseCacheDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

dataociapigatewaygateway.NewDataOciApigatewayGatewayResponseCacheDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApigatewayGatewayResponseCacheDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretId">AuthenticationSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretVersionNumber">AuthenticationSecretVersionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.connectTimeoutInMs">ConnectTimeoutInMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslEnabled">IsSslEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslVerifyDisabled">IsSslVerifyDisabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.readTimeoutInMs">ReadTimeoutInMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.sendTimeoutInMs">SendTimeoutInMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.servers">Servers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList">DataOciApigatewayGatewayResponseCacheDetailsServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetails">DataOciApigatewayGatewayResponseCacheDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationSecretId`<sup>Required</sup> <a name="AuthenticationSecretId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretId"></a>

```go
func AuthenticationSecretId() *string
```

- *Type:* *string

---

##### `AuthenticationSecretVersionNumber`<sup>Required</sup> <a name="AuthenticationSecretVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.authenticationSecretVersionNumber"></a>

```go
func AuthenticationSecretVersionNumber() *string
```

- *Type:* *string

---

##### `ConnectTimeoutInMs`<sup>Required</sup> <a name="ConnectTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.connectTimeoutInMs"></a>

```go
func ConnectTimeoutInMs() *f64
```

- *Type:* *f64

---

##### `IsSslEnabled`<sup>Required</sup> <a name="IsSslEnabled" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslEnabled"></a>

```go
func IsSslEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSslVerifyDisabled`<sup>Required</sup> <a name="IsSslVerifyDisabled" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.isSslVerifyDisabled"></a>

```go
func IsSslVerifyDisabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ReadTimeoutInMs`<sup>Required</sup> <a name="ReadTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.readTimeoutInMs"></a>

```go
func ReadTimeoutInMs() *f64
```

- *Type:* *f64

---

##### `SendTimeoutInMs`<sup>Required</sup> <a name="SendTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.sendTimeoutInMs"></a>

```go
func SendTimeoutInMs() *f64
```

- *Type:* *f64

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.servers"></a>

```go
func Servers() DataOciApigatewayGatewayResponseCacheDetailsServersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList">DataOciApigatewayGatewayResponseCacheDetailsServersList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApigatewayGatewayResponseCacheDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetails">DataOciApigatewayGatewayResponseCacheDetails</a>

---


### DataOciApigatewayGatewayResponseCacheDetailsServersList <a name="DataOciApigatewayGatewayResponseCacheDetailsServersList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

dataociapigatewaygateway.NewDataOciApigatewayGatewayResponseCacheDetailsServersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApigatewayGatewayResponseCacheDetailsServersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.get"></a>

```go
func Get(index *f64) DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference <a name="DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewaygateway"

dataociapigatewaygateway.NewDataOciApigatewayGatewayResponseCacheDetailsServersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServers">DataOciApigatewayGatewayResponseCacheDetailsServers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApigatewayGatewayResponseCacheDetailsServers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateway.DataOciApigatewayGatewayResponseCacheDetailsServers">DataOciApigatewayGatewayResponseCacheDetailsServers</a>

---



