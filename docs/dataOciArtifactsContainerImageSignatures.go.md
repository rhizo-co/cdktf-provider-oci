# `dataOciArtifactsContainerImageSignatures` Submodule <a name="`dataOciArtifactsContainerImageSignatures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciArtifactsContainerImageSignatures <a name="DataOciArtifactsContainerImageSignatures" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures oci_artifacts_container_image_signatures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

dataociartifactscontainerimagesignatures.NewDataOciArtifactsContainerImageSignatures(scope Construct, id *string, config DataOciArtifactsContainerImageSignaturesConfig) DataOciArtifactsContainerImageSignatures
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig">DataOciArtifactsContainerImageSignaturesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig">DataOciArtifactsContainerImageSignaturesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetImageDigest">ResetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetKmsKeyVersionId">ResetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetRepositoryId">ResetRepositoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetRepositoryName">ResetRepositoryName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetSigningAlgorithm">ResetSigningAlgorithm</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetId"></a>

```go
func ResetId()
```

##### `ResetImageDigest` <a name="ResetImageDigest" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetImageDigest"></a>

```go
func ResetImageDigest()
```

##### `ResetImageId` <a name="ResetImageId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetImageId"></a>

```go
func ResetImageId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetKmsKeyVersionId` <a name="ResetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetKmsKeyVersionId"></a>

```go
func ResetKmsKeyVersionId()
```

##### `ResetRepositoryId` <a name="ResetRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetRepositoryId"></a>

```go
func ResetRepositoryId()
```

##### `ResetRepositoryName` <a name="ResetRepositoryName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetRepositoryName"></a>

```go
func ResetRepositoryName()
```

##### `ResetSigningAlgorithm` <a name="ResetSigningAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetSigningAlgorithm"></a>

```go
func ResetSigningAlgorithm()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciArtifactsContainerImageSignatures resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

dataociartifactscontainerimagesignatures.DataOciArtifactsContainerImageSignatures_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

dataociartifactscontainerimagesignatures.DataOciArtifactsContainerImageSignatures_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

dataociartifactscontainerimagesignatures.DataOciArtifactsContainerImageSignatures_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

dataociartifactscontainerimagesignatures.DataOciArtifactsContainerImageSignatures_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciArtifactsContainerImageSignatures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciArtifactsContainerImageSignatures to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciArtifactsContainerImageSignatures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciArtifactsContainerImageSignatures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.containerImageSignatureCollection">ContainerImageSignatureCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList">DataOciArtifactsContainerImageSignaturesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageDigestInput">ImageDigestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyVersionIdInput">KmsKeyVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.signingAlgorithmInput">SigningAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageDigest">ImageDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ContainerImageSignatureCollection`<sup>Required</sup> <a name="ContainerImageSignatureCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.containerImageSignatureCollection"></a>

```go
func ContainerImageSignatureCollection() DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.filter"></a>

```go
func Filter() DataOciArtifactsContainerImageSignaturesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList">DataOciArtifactsContainerImageSignaturesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageDigestInput`<sup>Optional</sup> <a name="ImageDigestInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageDigestInput"></a>

```go
func ImageDigestInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyVersionIdInput`<sup>Optional</sup> <a name="KmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyVersionIdInput"></a>

```go
func KmsKeyVersionIdInput() *string
```

- *Type:* *string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryNameInput"></a>

```go
func RepositoryNameInput() *string
```

- *Type:* *string

---

##### `SigningAlgorithmInput`<sup>Optional</sup> <a name="SigningAlgorithmInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.signingAlgorithmInput"></a>

```go
func SigningAlgorithmInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageDigest"></a>

```go
func ImageDigest() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyVersionId"></a>

```go
func KmsKeyVersionId() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryName"></a>

```go
func RepositoryName() *string
```

- *Type:* *string

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.signingAlgorithm"></a>

```go
func SigningAlgorithm() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciArtifactsContainerImageSignaturesConfig <a name="DataOciArtifactsContainerImageSignaturesConfig" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

&dataociartifactscontainerimagesignatures.DataOciArtifactsContainerImageSignaturesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CompartmentIdInSubtree: interface{},
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	ImageDigest: *string,
	ImageId: *string,
	KmsKeyId: *string,
	KmsKeyVersionId: *string,
	RepositoryId: *string,
	RepositoryName: *string,
	SigningAlgorithm: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#compartment_id DataOciArtifactsContainerImageSignatures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#compartment_id_in_subtree DataOciArtifactsContainerImageSignatures#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#display_name DataOciArtifactsContainerImageSignatures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#id DataOciArtifactsContainerImageSignatures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.imageDigest">ImageDigest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#image_digest DataOciArtifactsContainerImageSignatures#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#image_id DataOciArtifactsContainerImageSignatures#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#kms_key_id DataOciArtifactsContainerImageSignatures#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#kms_key_version_id DataOciArtifactsContainerImageSignatures#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#repository_id DataOciArtifactsContainerImageSignatures#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#repository_name DataOciArtifactsContainerImageSignatures#repository_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#signing_algorithm DataOciArtifactsContainerImageSignatures#signing_algorithm}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#compartment_id DataOciArtifactsContainerImageSignatures#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#compartment_id_in_subtree DataOciArtifactsContainerImageSignatures#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#display_name DataOciArtifactsContainerImageSignatures#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#filter DataOciArtifactsContainerImageSignatures#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#id DataOciArtifactsContainerImageSignatures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageDigest`<sup>Optional</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.imageDigest"></a>

```go
ImageDigest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#image_digest DataOciArtifactsContainerImageSignatures#image_digest}.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#image_id DataOciArtifactsContainerImageSignatures#image_id}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#kms_key_id DataOciArtifactsContainerImageSignatures#kms_key_id}.

---

##### `KmsKeyVersionId`<sup>Optional</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.kmsKeyVersionId"></a>

```go
KmsKeyVersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#kms_key_version_id DataOciArtifactsContainerImageSignatures#kms_key_version_id}.

---

##### `RepositoryId`<sup>Optional</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#repository_id DataOciArtifactsContainerImageSignatures#repository_id}.

---

##### `RepositoryName`<sup>Optional</sup> <a name="RepositoryName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.repositoryName"></a>

```go
RepositoryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#repository_name DataOciArtifactsContainerImageSignatures#repository_name}.

---

##### `SigningAlgorithm`<sup>Optional</sup> <a name="SigningAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.signingAlgorithm"></a>

```go
SigningAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#signing_algorithm DataOciArtifactsContainerImageSignatures#signing_algorithm}.

---

### DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection <a name="DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

&dataociartifactscontainerimagesignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection {

}
```


### DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems <a name="DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

&dataociartifactscontainerimagesignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems {

}
```


### DataOciArtifactsContainerImageSignaturesFilter <a name="DataOciArtifactsContainerImageSignaturesFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

&dataociartifactscontainerimagesignatures.DataOciArtifactsContainerImageSignaturesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#name DataOciArtifactsContainerImageSignatures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#values DataOciArtifactsContainerImageSignatures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#regex DataOciArtifactsContainerImageSignatures#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#name DataOciArtifactsContainerImageSignatures#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#values DataOciArtifactsContainerImageSignatures#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#regex DataOciArtifactsContainerImageSignatures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList <a name="DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

dataociartifactscontainerimagesignatures.NewDataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference <a name="DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

dataociartifactscontainerimagesignatures.NewDataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.kmsKeyVersionId"></a>

```go
func KmsKeyVersionId() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.signingAlgorithm"></a>

```go
func SigningAlgorithm() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems</a>

---


### DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList <a name="DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

dataociartifactscontainerimagesignatures.NewDataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.get"></a>

```go
func Get(index *f64) DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference <a name="DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

dataociartifactscontainerimagesignatures.NewDataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.remainingItemsCount">RemainingItemsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.items"></a>

```go
func Items() DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList</a>

---

##### `RemainingItemsCount`<sup>Required</sup> <a name="RemainingItemsCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.remainingItemsCount"></a>

```go
func RemainingItemsCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection</a>

---


### DataOciArtifactsContainerImageSignaturesFilterList <a name="DataOciArtifactsContainerImageSignaturesFilterList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

dataociartifactscontainerimagesignatures.NewDataOciArtifactsContainerImageSignaturesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciArtifactsContainerImageSignaturesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.get"></a>

```go
func Get(index *f64) DataOciArtifactsContainerImageSignaturesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciArtifactsContainerImageSignaturesFilterOutputReference <a name="DataOciArtifactsContainerImageSignaturesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerimagesignatures"

dataociartifactscontainerimagesignatures.NewDataOciArtifactsContainerImageSignaturesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciArtifactsContainerImageSignaturesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



