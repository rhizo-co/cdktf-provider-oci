# `dataOciObjectstorageObject` Submodule <a name="`dataOciObjectstorageObject` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstorageObject <a name="DataOciObjectstorageObject" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object oci_objectstorage_object}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobject"

dataociobjectstorageobject.NewDataOciObjectstorageObject(scope Construct, id *string, config DataOciObjectstorageObjectConfig) DataOciObjectstorageObject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig">DataOciObjectstorageObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig">DataOciObjectstorageObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetBase64EncodeContent">ResetBase64EncodeContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetContentLengthLimit">ResetContentLengthLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseCacheControl">ResetHttpResponseCacheControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentDisposition">ResetHttpResponseContentDisposition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentEncoding">ResetHttpResponseContentEncoding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentLanguage">ResetHttpResponseContentLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentType">ResetHttpResponseContentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseExpires">ResetHttpResponseExpires</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBase64EncodeContent` <a name="ResetBase64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetBase64EncodeContent"></a>

```go
func ResetBase64EncodeContent()
```

##### `ResetContentLengthLimit` <a name="ResetContentLengthLimit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetContentLengthLimit"></a>

```go
func ResetContentLengthLimit()
```

##### `ResetHttpResponseCacheControl` <a name="ResetHttpResponseCacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseCacheControl"></a>

```go
func ResetHttpResponseCacheControl()
```

##### `ResetHttpResponseContentDisposition` <a name="ResetHttpResponseContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentDisposition"></a>

```go
func ResetHttpResponseContentDisposition()
```

##### `ResetHttpResponseContentEncoding` <a name="ResetHttpResponseContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentEncoding"></a>

```go
func ResetHttpResponseContentEncoding()
```

##### `ResetHttpResponseContentLanguage` <a name="ResetHttpResponseContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentLanguage"></a>

```go
func ResetHttpResponseContentLanguage()
```

##### `ResetHttpResponseContentType` <a name="ResetHttpResponseContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentType"></a>

```go
func ResetHttpResponseContentType()
```

##### `ResetHttpResponseExpires` <a name="ResetHttpResponseExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseExpires"></a>

```go
func ResetHttpResponseExpires()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetId"></a>

```go
func ResetId()
```

##### `ResetVersionId` <a name="ResetVersionId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetVersionId"></a>

```go
func ResetVersionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstorageObject resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobject"

dataociobjectstorageobject.DataOciObjectstorageObject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobject"

dataociobjectstorageobject.DataOciObjectstorageObject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobject"

dataociobjectstorageobject.DataOciObjectstorageObject_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobject"

dataociobjectstorageobject.DataOciObjectstorageObject_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciObjectstorageObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciObjectstorageObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciObjectstorageObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstorageObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cacheControl">CacheControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLength">ContentLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentMd5">ContentMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.storageTier">StorageTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContentInput">Base64EncodeContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimitInput">ContentLengthLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControlInput">HttpResponseCacheControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDispositionInput">HttpResponseContentDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncodingInput">HttpResponseContentEncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguageInput">HttpResponseContentLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentTypeInput">HttpResponseContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpiresInput">HttpResponseExpiresInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimit">ContentLengthLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControl">HttpResponseCacheControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDisposition">HttpResponseContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncoding">HttpResponseContentEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguage">HttpResponseContentLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentType">HttpResponseContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpires">HttpResponseExpires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cacheControl"></a>

```go
func CacheControl() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentDisposition"></a>

```go
func ContentDisposition() *string
```

- *Type:* *string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentEncoding"></a>

```go
func ContentEncoding() *string
```

- *Type:* *string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLanguage"></a>

```go
func ContentLanguage() *string
```

- *Type:* *string

---

##### `ContentLength`<sup>Required</sup> <a name="ContentLength" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLength"></a>

```go
func ContentLength() *string
```

- *Type:* *string

---

##### `ContentMd5`<sup>Required</sup> <a name="ContentMd5" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentMd5"></a>

```go
func ContentMd5() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `StorageTier`<sup>Required</sup> <a name="StorageTier" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.storageTier"></a>

```go
func StorageTier() *string
```

- *Type:* *string

---

##### `Base64EncodeContentInput`<sup>Optional</sup> <a name="Base64EncodeContentInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContentInput"></a>

```go
func Base64EncodeContentInput() interface{}
```

- *Type:* interface{}

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `ContentLengthLimitInput`<sup>Optional</sup> <a name="ContentLengthLimitInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimitInput"></a>

```go
func ContentLengthLimitInput() *f64
```

- *Type:* *f64

---

##### `HttpResponseCacheControlInput`<sup>Optional</sup> <a name="HttpResponseCacheControlInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControlInput"></a>

```go
func HttpResponseCacheControlInput() *string
```

- *Type:* *string

---

##### `HttpResponseContentDispositionInput`<sup>Optional</sup> <a name="HttpResponseContentDispositionInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDispositionInput"></a>

```go
func HttpResponseContentDispositionInput() *string
```

- *Type:* *string

---

##### `HttpResponseContentEncodingInput`<sup>Optional</sup> <a name="HttpResponseContentEncodingInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncodingInput"></a>

```go
func HttpResponseContentEncodingInput() *string
```

- *Type:* *string

---

##### `HttpResponseContentLanguageInput`<sup>Optional</sup> <a name="HttpResponseContentLanguageInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguageInput"></a>

```go
func HttpResponseContentLanguageInput() *string
```

- *Type:* *string

---

##### `HttpResponseContentTypeInput`<sup>Optional</sup> <a name="HttpResponseContentTypeInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentTypeInput"></a>

```go
func HttpResponseContentTypeInput() *string
```

- *Type:* *string

---

##### `HttpResponseExpiresInput`<sup>Optional</sup> <a name="HttpResponseExpiresInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpiresInput"></a>

```go
func HttpResponseExpiresInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `Base64EncodeContent`<sup>Required</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContent"></a>

```go
func Base64EncodeContent() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ContentLengthLimit`<sup>Required</sup> <a name="ContentLengthLimit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimit"></a>

```go
func ContentLengthLimit() *f64
```

- *Type:* *f64

---

##### `HttpResponseCacheControl`<sup>Required</sup> <a name="HttpResponseCacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControl"></a>

```go
func HttpResponseCacheControl() *string
```

- *Type:* *string

---

##### `HttpResponseContentDisposition`<sup>Required</sup> <a name="HttpResponseContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDisposition"></a>

```go
func HttpResponseContentDisposition() *string
```

- *Type:* *string

---

##### `HttpResponseContentEncoding`<sup>Required</sup> <a name="HttpResponseContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncoding"></a>

```go
func HttpResponseContentEncoding() *string
```

- *Type:* *string

---

##### `HttpResponseContentLanguage`<sup>Required</sup> <a name="HttpResponseContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguage"></a>

```go
func HttpResponseContentLanguage() *string
```

- *Type:* *string

---

##### `HttpResponseContentType`<sup>Required</sup> <a name="HttpResponseContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentType"></a>

```go
func HttpResponseContentType() *string
```

- *Type:* *string

---

##### `HttpResponseExpires`<sup>Required</sup> <a name="HttpResponseExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpires"></a>

```go
func HttpResponseExpires() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstorageObjectConfig <a name="DataOciObjectstorageObjectConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobject"

&dataociobjectstorageobject.DataOciObjectstorageObjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Namespace: *string,
	Object: *string,
	Base64EncodeContent: interface{},
	ContentLengthLimit: *f64,
	HttpResponseCacheControl: *string,
	HttpResponseContentDisposition: *string,
	HttpResponseContentEncoding: *string,
	HttpResponseContentLanguage: *string,
	HttpResponseContentType: *string,
	HttpResponseExpires: *string,
	Id: *string,
	VersionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.contentLengthLimit">ContentLengthLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseCacheControl">HttpResponseCacheControl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentDisposition">HttpResponseContentDisposition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentEncoding">HttpResponseContentEncoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentLanguage">HttpResponseContentLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentType">HttpResponseContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseExpires">HttpResponseExpires</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.versionId">VersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}.

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}.

---

##### `Base64EncodeContent`<sup>Optional</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.base64EncodeContent"></a>

```go
Base64EncodeContent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}.

---

##### `ContentLengthLimit`<sup>Optional</sup> <a name="ContentLengthLimit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.contentLengthLimit"></a>

```go
ContentLengthLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}.

---

##### `HttpResponseCacheControl`<sup>Optional</sup> <a name="HttpResponseCacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseCacheControl"></a>

```go
HttpResponseCacheControl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}.

---

##### `HttpResponseContentDisposition`<sup>Optional</sup> <a name="HttpResponseContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentDisposition"></a>

```go
HttpResponseContentDisposition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}.

---

##### `HttpResponseContentEncoding`<sup>Optional</sup> <a name="HttpResponseContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentEncoding"></a>

```go
HttpResponseContentEncoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}.

---

##### `HttpResponseContentLanguage`<sup>Optional</sup> <a name="HttpResponseContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentLanguage"></a>

```go
HttpResponseContentLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}.

---

##### `HttpResponseContentType`<sup>Optional</sup> <a name="HttpResponseContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentType"></a>

```go
HttpResponseContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}.

---

##### `HttpResponseExpires`<sup>Optional</sup> <a name="HttpResponseExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseExpires"></a>

```go
HttpResponseExpires *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}.

---



