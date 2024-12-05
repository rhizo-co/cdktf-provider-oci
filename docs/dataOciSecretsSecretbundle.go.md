# `dataOciSecretsSecretbundle` Submodule <a name="`dataOciSecretsSecretbundle` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSecretsSecretbundle <a name="DataOciSecretsSecretbundle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle oci_secrets_secretbundle}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecretssecretbundle"

dataocisecretssecretbundle.NewDataOciSecretsSecretbundle(scope Construct, id *string, config DataOciSecretsSecretbundleConfig) DataOciSecretsSecretbundle
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig">DataOciSecretsSecretbundleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig">DataOciSecretsSecretbundleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetSecretVersionName">ResetSecretVersionName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetStage">ResetStage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetVersionNumber">ResetVersionNumber</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetId"></a>

```go
func ResetId()
```

##### `ResetSecretVersionName` <a name="ResetSecretVersionName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetSecretVersionName"></a>

```go
func ResetSecretVersionName()
```

##### `ResetStage` <a name="ResetStage" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetStage"></a>

```go
func ResetStage()
```

##### `ResetVersionNumber` <a name="ResetVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetVersionNumber"></a>

```go
func ResetVersionNumber()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSecretsSecretbundle resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecretssecretbundle"

dataocisecretssecretbundle.DataOciSecretsSecretbundle_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecretssecretbundle"

dataocisecretssecretbundle.DataOciSecretsSecretbundle_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecretssecretbundle"

dataocisecretssecretbundle.DataOciSecretsSecretbundle_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecretssecretbundle"

dataocisecretssecretbundle.DataOciSecretsSecretbundle_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciSecretsSecretbundle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciSecretsSecretbundle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciSecretsSecretbundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSecretsSecretbundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretBundleContent">SecretBundleContent</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList">DataOciSecretsSecretbundleSecretBundleContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stages">Stages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeOfExpiry">TimeOfExpiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretVersionNameInput">SecretVersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stageInput">StageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionNumberInput">VersionNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretVersionName">SecretVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionNumber">VersionNumber</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `SecretBundleContent`<sup>Required</sup> <a name="SecretBundleContent" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretBundleContent"></a>

```go
func SecretBundleContent() DataOciSecretsSecretbundleSecretBundleContentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList">DataOciSecretsSecretbundleSecretBundleContentList</a>

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stages"></a>

```go
func Stages() *[]*string
```

- *Type:* *[]*string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

##### `TimeOfExpiry`<sup>Required</sup> <a name="TimeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeOfExpiry"></a>

```go
func TimeOfExpiry() *string
```

- *Type:* *string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `SecretVersionNameInput`<sup>Optional</sup> <a name="SecretVersionNameInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretVersionNameInput"></a>

```go
func SecretVersionNameInput() *string
```

- *Type:* *string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stageInput"></a>

```go
func StageInput() *string
```

- *Type:* *string

---

##### `VersionNumberInput`<sup>Optional</sup> <a name="VersionNumberInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionNumberInput"></a>

```go
func VersionNumberInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `SecretVersionName`<sup>Required</sup> <a name="SecretVersionName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretVersionName"></a>

```go
func SecretVersionName() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionNumber"></a>

```go
func VersionNumber() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSecretsSecretbundleConfig <a name="DataOciSecretsSecretbundleConfig" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecretssecretbundle"

&dataocisecretssecretbundle.DataOciSecretsSecretbundleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecretId: *string,
	Id: *string,
	SecretVersionName: *string,
	Stage: *string,
	VersionNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.secretId">SecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_id DataOciSecretsSecretbundle#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#id DataOciSecretsSecretbundle#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.secretVersionName">SecretVersionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_version_name DataOciSecretsSecretbundle#secret_version_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.stage">Stage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#stage DataOciSecretsSecretbundle#stage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.versionNumber">VersionNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#version_number DataOciSecretsSecretbundle#version_number}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_id DataOciSecretsSecretbundle#secret_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#id DataOciSecretsSecretbundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecretVersionName`<sup>Optional</sup> <a name="SecretVersionName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.secretVersionName"></a>

```go
SecretVersionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_version_name DataOciSecretsSecretbundle#secret_version_name}.

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.stage"></a>

```go
Stage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#stage DataOciSecretsSecretbundle#stage}.

---

##### `VersionNumber`<sup>Optional</sup> <a name="VersionNumber" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.versionNumber"></a>

```go
VersionNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#version_number DataOciSecretsSecretbundle#version_number}.

---

### DataOciSecretsSecretbundleSecretBundleContent <a name="DataOciSecretsSecretbundleSecretBundleContent" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContent.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecretssecretbundle"

&dataocisecretssecretbundle.DataOciSecretsSecretbundleSecretBundleContent {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSecretsSecretbundleSecretBundleContentList <a name="DataOciSecretsSecretbundleSecretBundleContentList" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecretssecretbundle"

dataocisecretssecretbundle.NewDataOciSecretsSecretbundleSecretBundleContentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSecretsSecretbundleSecretBundleContentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.get"></a>

```go
func Get(index *f64) DataOciSecretsSecretbundleSecretBundleContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSecretsSecretbundleSecretBundleContentOutputReference <a name="DataOciSecretsSecretbundleSecretBundleContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecretssecretbundle"

dataocisecretssecretbundle.NewDataOciSecretsSecretbundleSecretBundleContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSecretsSecretbundleSecretBundleContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContent">DataOciSecretsSecretbundleSecretBundleContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSecretsSecretbundleSecretBundleContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContent">DataOciSecretsSecretbundleSecretBundleContent</a>

---



