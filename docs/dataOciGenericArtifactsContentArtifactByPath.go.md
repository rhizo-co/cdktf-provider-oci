# `dataOciGenericArtifactsContentArtifactByPath` Submodule <a name="`dataOciGenericArtifactsContentArtifactByPath` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenericArtifactsContentArtifactByPath <a name="DataOciGenericArtifactsContentArtifactByPath" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path oci_generic_artifacts_content_artifact_by_path}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenericartifactscontentartifactbypath"

dataocigenericartifactscontentartifactbypath.NewDataOciGenericArtifactsContentArtifactByPath(scope Construct, id *string, config DataOciGenericArtifactsContentArtifactByPathConfig) DataOciGenericArtifactsContentArtifactByPath
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig">DataOciGenericArtifactsContentArtifactByPathConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig">DataOciGenericArtifactsContentArtifactByPathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenericArtifactsContentArtifactByPath resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenericartifactscontentartifactbypath"

dataocigenericartifactscontentartifactbypath.DataOciGenericArtifactsContentArtifactByPath_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenericartifactscontentartifactbypath"

dataocigenericartifactscontentartifactbypath.DataOciGenericArtifactsContentArtifactByPath_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenericartifactscontentartifactbypath"

dataocigenericartifactscontentartifactbypath.DataOciGenericArtifactsContentArtifactByPath_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenericartifactscontentartifactbypath"

dataocigenericartifactscontentartifactbypath.DataOciGenericArtifactsContentArtifactByPath_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciGenericArtifactsContentArtifactByPath resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciGenericArtifactsContentArtifactByPath to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciGenericArtifactsContentArtifactByPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenericArtifactsContentArtifactByPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.sizeInBytes">SizeInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactPathInput">ArtifactPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactPath">ArtifactPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.sizeInBytes"></a>

```go
func SizeInBytes() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `ArtifactPathInput`<sup>Optional</sup> <a name="ArtifactPathInput" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactPathInput"></a>

```go
func ArtifactPathInput() *string
```

- *Type:* *string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `ArtifactPath`<sup>Required</sup> <a name="ArtifactPath" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactPath"></a>

```go
func ArtifactPath() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenericArtifactsContentArtifactByPathConfig <a name="DataOciGenericArtifactsContentArtifactByPathConfig" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenericartifactscontentartifactbypath"

&dataocigenericartifactscontentartifactbypath.DataOciGenericArtifactsContentArtifactByPathConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArtifactPath: *string,
	RepositoryId: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.artifactPath">ArtifactPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#artifact_path DataOciGenericArtifactsContentArtifactByPath#artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#repository_id DataOciGenericArtifactsContentArtifactByPath#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#version DataOciGenericArtifactsContentArtifactByPath#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactPath`<sup>Required</sup> <a name="ArtifactPath" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.artifactPath"></a>

```go
ArtifactPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#artifact_path DataOciGenericArtifactsContentArtifactByPath#artifact_path}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#repository_id DataOciGenericArtifactsContentArtifactByPath#repository_id}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#version DataOciGenericArtifactsContentArtifactByPath#version}.

---



