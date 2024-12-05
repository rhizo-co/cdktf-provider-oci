# `dataOciDataintegrationWorkspaceImportRequest` Submodule <a name="`dataOciDataintegrationWorkspaceImportRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceImportRequest <a name="DataOciDataintegrationWorkspaceImportRequest" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request oci_dataintegration_workspace_import_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequest"

dataocidataintegrationworkspaceimportrequest.NewDataOciDataintegrationWorkspaceImportRequest(scope Construct, id *string, config DataOciDataintegrationWorkspaceImportRequestConfig) DataOciDataintegrationWorkspaceImportRequest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig">DataOciDataintegrationWorkspaceImportRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig">DataOciDataintegrationWorkspaceImportRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequest"

dataocidataintegrationworkspaceimportrequest.DataOciDataintegrationWorkspaceImportRequest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequest"

dataocidataintegrationworkspaceimportrequest.DataOciDataintegrationWorkspaceImportRequest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequest"

dataocidataintegrationworkspaceimportrequest.DataOciDataintegrationWorkspaceImportRequest_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequest"

dataocidataintegrationworkspaceimportrequest.DataOciDataintegrationWorkspaceImportRequest_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataintegrationWorkspaceImportRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataintegrationWorkspaceImportRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceImportRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncluded">AreDataAssetReferencesIncluded</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.errorMessages">ErrorMessages</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importConflictResolution">ImportConflictResolution</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList">DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importedObjects">ImportedObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList">DataOciDataintegrationWorkspaceImportRequestImportedObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectKeyForImport">ObjectKeyForImport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageRegion">ObjectStorageRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageTenancyId">ObjectStorageTenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeEndedInMillis">TimeEndedInMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeStartedInMillis">TimeStartedInMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.totalImportedObjectCount">TotalImportedObjectCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKeyInput">ImportRequestKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKey">ImportRequestKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AreDataAssetReferencesIncluded`<sup>Required</sup> <a name="AreDataAssetReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncluded"></a>

```go
func AreDataAssetReferencesIncluded() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `ErrorMessages`<sup>Required</sup> <a name="ErrorMessages" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.errorMessages"></a>

```go
func ErrorMessages() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportConflictResolution`<sup>Required</sup> <a name="ImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importConflictResolution"></a>

```go
func ImportConflictResolution() DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList">DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList</a>

---

##### `ImportedObjects`<sup>Required</sup> <a name="ImportedObjects" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importedObjects"></a>

```go
func ImportedObjects() DataOciDataintegrationWorkspaceImportRequestImportedObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList">DataOciDataintegrationWorkspaceImportRequestImportedObjectsList</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectKeyForImport`<sup>Required</sup> <a name="ObjectKeyForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectKeyForImport"></a>

```go
func ObjectKeyForImport() *string
```

- *Type:* *string

---

##### `ObjectStorageRegion`<sup>Required</sup> <a name="ObjectStorageRegion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageRegion"></a>

```go
func ObjectStorageRegion() *string
```

- *Type:* *string

---

##### `ObjectStorageTenancyId`<sup>Required</sup> <a name="ObjectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageTenancyId"></a>

```go
func ObjectStorageTenancyId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeEndedInMillis`<sup>Required</sup> <a name="TimeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeEndedInMillis"></a>

```go
func TimeEndedInMillis() *string
```

- *Type:* *string

---

##### `TimeStartedInMillis`<sup>Required</sup> <a name="TimeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeStartedInMillis"></a>

```go
func TimeStartedInMillis() *string
```

- *Type:* *string

---

##### `TotalImportedObjectCount`<sup>Required</sup> <a name="TotalImportedObjectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.totalImportedObjectCount"></a>

```go
func TotalImportedObjectCount() *f64
```

- *Type:* *f64

---

##### `ImportRequestKeyInput`<sup>Optional</sup> <a name="ImportRequestKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKeyInput"></a>

```go
func ImportRequestKeyInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `ImportRequestKey`<sup>Required</sup> <a name="ImportRequestKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKey"></a>

```go
func ImportRequestKey() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceImportRequestConfig <a name="DataOciDataintegrationWorkspaceImportRequestConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequest"

&dataocidataintegrationworkspaceimportrequest.DataOciDataintegrationWorkspaceImportRequestConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ImportRequestKey: *string,
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.importRequestKey">ImportRequestKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#import_request_key DataOciDataintegrationWorkspaceImportRequest#import_request_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#workspace_id DataOciDataintegrationWorkspaceImportRequest#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ImportRequestKey`<sup>Required</sup> <a name="ImportRequestKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.importRequestKey"></a>

```go
ImportRequestKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#import_request_key DataOciDataintegrationWorkspaceImportRequest#import_request_key}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#workspace_id DataOciDataintegrationWorkspaceImportRequest#workspace_id}.

---

### DataOciDataintegrationWorkspaceImportRequestImportConflictResolution <a name="DataOciDataintegrationWorkspaceImportRequestImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequest"

&dataocidataintegrationworkspaceimportrequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution {

}
```


### DataOciDataintegrationWorkspaceImportRequestImportedObjects <a name="DataOciDataintegrationWorkspaceImportRequestImportedObjects" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequest"

&dataocidataintegrationworkspaceimportrequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList <a name="DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequest"

dataocidataintegrationworkspaceimportrequest.NewDataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequest"

dataocidataintegrationworkspaceimportrequest.NewDataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefix">DuplicatePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffix">DuplicateSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionType">ImportConflictResolutionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution">DataOciDataintegrationWorkspaceImportRequestImportConflictResolution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DuplicatePrefix`<sup>Required</sup> <a name="DuplicatePrefix" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefix"></a>

```go
func DuplicatePrefix() *string
```

- *Type:* *string

---

##### `DuplicateSuffix`<sup>Required</sup> <a name="DuplicateSuffix" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffix"></a>

```go
func DuplicateSuffix() *string
```

- *Type:* *string

---

##### `ImportConflictResolutionType`<sup>Required</sup> <a name="ImportConflictResolutionType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionType"></a>

```go
func ImportConflictResolutionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceImportRequestImportConflictResolution
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution">DataOciDataintegrationWorkspaceImportRequestImportConflictResolution</a>

---


### DataOciDataintegrationWorkspaceImportRequestImportedObjectsList <a name="DataOciDataintegrationWorkspaceImportRequestImportedObjectsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequest"

dataocidataintegrationworkspaceimportrequest.NewDataOciDataintegrationWorkspaceImportRequestImportedObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceImportRequestImportedObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequest"

dataocidataintegrationworkspaceimportrequest.NewDataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.namePath">NamePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.newKey">NewKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.oldKey">OldKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.resolutionAction">ResolutionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.timeUpdatedInMillis">TimeUpdatedInMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects">DataOciDataintegrationWorkspaceImportRequestImportedObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.aggregatorKey"></a>

```go
func AggregatorKey() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePath`<sup>Required</sup> <a name="NamePath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.namePath"></a>

```go
func NamePath() *string
```

- *Type:* *string

---

##### `NewKey`<sup>Required</sup> <a name="NewKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.newKey"></a>

```go
func NewKey() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *string
```

- *Type:* *string

---

##### `OldKey`<sup>Required</sup> <a name="OldKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.oldKey"></a>

```go
func OldKey() *string
```

- *Type:* *string

---

##### `ResolutionAction`<sup>Required</sup> <a name="ResolutionAction" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.resolutionAction"></a>

```go
func ResolutionAction() *string
```

- *Type:* *string

---

##### `TimeUpdatedInMillis`<sup>Required</sup> <a name="TimeUpdatedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.timeUpdatedInMillis"></a>

```go
func TimeUpdatedInMillis() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceImportRequestImportedObjects
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects">DataOciDataintegrationWorkspaceImportRequestImportedObjects</a>

---



