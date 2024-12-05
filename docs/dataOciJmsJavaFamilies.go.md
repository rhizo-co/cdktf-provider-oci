# `dataOciJmsJavaFamilies` Submodule <a name="`dataOciJmsJavaFamilies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaFamilies <a name="DataOciJmsJavaFamilies" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families oci_jms_java_families}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

dataocijmsjavafamilies.NewDataOciJmsJavaFamilies(scope Construct, id *string, config DataOciJmsJavaFamiliesConfig) DataOciJmsJavaFamilies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig">DataOciJmsJavaFamiliesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig">DataOciJmsJavaFamiliesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFamilyVersion">ResetFamilyVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetIsSupportedVersion">ResetIsSupportedVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFamilyVersion` <a name="ResetFamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFamilyVersion"></a>

```go
func ResetFamilyVersion()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetId"></a>

```go
func ResetId()
```

##### `ResetIsSupportedVersion` <a name="ResetIsSupportedVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetIsSupportedVersion"></a>

```go
func ResetIsSupportedVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsJavaFamilies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

dataocijmsjavafamilies.DataOciJmsJavaFamilies_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

dataocijmsjavafamilies.DataOciJmsJavaFamilies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

dataocijmsjavafamilies.DataOciJmsJavaFamilies_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

dataocijmsjavafamilies.DataOciJmsJavaFamilies_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciJmsJavaFamilies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciJmsJavaFamilies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciJmsJavaFamilies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaFamilies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList">DataOciJmsJavaFamiliesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.javaFamilyCollection">JavaFamilyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList">DataOciJmsJavaFamiliesJavaFamilyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersionInput">FamilyVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersionInput">IsSupportedVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersion">FamilyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersion">IsSupportedVersion</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filter"></a>

```go
func Filter() DataOciJmsJavaFamiliesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList">DataOciJmsJavaFamiliesFilterList</a>

---

##### `JavaFamilyCollection`<sup>Required</sup> <a name="JavaFamilyCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.javaFamilyCollection"></a>

```go
func JavaFamilyCollection() DataOciJmsJavaFamiliesJavaFamilyCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList">DataOciJmsJavaFamiliesJavaFamilyCollectionList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FamilyVersionInput`<sup>Optional</sup> <a name="FamilyVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersionInput"></a>

```go
func FamilyVersionInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsSupportedVersionInput`<sup>Optional</sup> <a name="IsSupportedVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersionInput"></a>

```go
func IsSupportedVersionInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FamilyVersion`<sup>Required</sup> <a name="FamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersion"></a>

```go
func FamilyVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsSupportedVersion`<sup>Required</sup> <a name="IsSupportedVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersion"></a>

```go
func IsSupportedVersion() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaFamiliesConfig <a name="DataOciJmsJavaFamiliesConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

&dataocijmsjavafamilies.DataOciJmsJavaFamiliesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	FamilyVersion: *string,
	Filter: interface{},
	Id: *string,
	IsSupportedVersion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#display_name DataOciJmsJavaFamilies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.familyVersion">FamilyVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#family_version DataOciJmsJavaFamilies#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#id DataOciJmsJavaFamilies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.isSupportedVersion">IsSupportedVersion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#is_supported_version DataOciJmsJavaFamilies#is_supported_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#display_name DataOciJmsJavaFamilies#display_name}.

---

##### `FamilyVersion`<sup>Optional</sup> <a name="FamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.familyVersion"></a>

```go
FamilyVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#family_version DataOciJmsJavaFamilies#family_version}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#filter DataOciJmsJavaFamilies#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#id DataOciJmsJavaFamilies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsSupportedVersion`<sup>Optional</sup> <a name="IsSupportedVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.isSupportedVersion"></a>

```go
IsSupportedVersion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#is_supported_version DataOciJmsJavaFamilies#is_supported_version}.

---

### DataOciJmsJavaFamiliesFilter <a name="DataOciJmsJavaFamiliesFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

&dataocijmsjavafamilies.DataOciJmsJavaFamiliesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#name DataOciJmsJavaFamilies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#values DataOciJmsJavaFamilies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#regex DataOciJmsJavaFamilies#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#name DataOciJmsJavaFamilies#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#values DataOciJmsJavaFamilies#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#regex DataOciJmsJavaFamilies#regex}.

---

### DataOciJmsJavaFamiliesJavaFamilyCollection <a name="DataOciJmsJavaFamiliesJavaFamilyCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

&dataocijmsjavafamilies.DataOciJmsJavaFamiliesJavaFamilyCollection {

}
```


### DataOciJmsJavaFamiliesJavaFamilyCollectionItems <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

&dataocijmsjavafamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems {

}
```


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

&dataocijmsjavafamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaFamiliesFilterList <a name="DataOciJmsJavaFamiliesFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

dataocijmsjavafamilies.NewDataOciJmsJavaFamiliesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaFamiliesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaFamiliesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciJmsJavaFamiliesFilterOutputReference <a name="DataOciJmsJavaFamiliesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

dataocijmsjavafamilies.NewDataOciJmsJavaFamiliesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaFamiliesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

dataocijmsjavafamilies.NewDataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

dataocijmsjavafamilies.NewDataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes">ApproximateFileSizeInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactContentType">ArtifactContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactDescription">ArtifactDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactFileName">ArtifactFileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.downloadUrl">DownloadUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.osFamily">OsFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageTypeDetail">PackageTypeDetail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl">ScriptChecksumUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl">ScriptDownloadUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApproximateFileSizeInBytes`<sup>Required</sup> <a name="ApproximateFileSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes"></a>

```go
func ApproximateFileSizeInBytes() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `ArtifactContentType`<sup>Required</sup> <a name="ArtifactContentType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactContentType"></a>

```go
func ArtifactContentType() *string
```

- *Type:* *string

---

##### `ArtifactDescription`<sup>Required</sup> <a name="ArtifactDescription" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactDescription"></a>

```go
func ArtifactDescription() *string
```

- *Type:* *string

---

##### `ArtifactFileName`<sup>Required</sup> <a name="ArtifactFileName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactFileName"></a>

```go
func ArtifactFileName() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `DownloadUrl`<sup>Required</sup> <a name="DownloadUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.downloadUrl"></a>

```go
func DownloadUrl() *string
```

- *Type:* *string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.osFamily"></a>

```go
func OsFamily() *string
```

- *Type:* *string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `PackageTypeDetail`<sup>Required</sup> <a name="PackageTypeDetail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageTypeDetail"></a>

```go
func PackageTypeDetail() *string
```

- *Type:* *string

---

##### `ScriptChecksumUrl`<sup>Required</sup> <a name="ScriptChecksumUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl"></a>

```go
func ScriptChecksumUrl() *string
```

- *Type:* *string

---

##### `ScriptDownloadUrl`<sup>Required</sup> <a name="ScriptDownloadUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl"></a>

```go
func ScriptDownloadUrl() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts</a>

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

dataocijmsjavafamilies.NewDataOciJmsJavaFamiliesJavaFamilyCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

dataocijmsjavafamilies.NewDataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.docUrl">DocUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.endOfSupportLifeDate">EndOfSupportLifeDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.familyVersion">FamilyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.isSupportedVersion">IsSupportedVersion</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseArtifacts">LatestReleaseArtifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseVersion">LatestReleaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.releaseDate">ReleaseDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.supportType">SupportType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems">DataOciJmsJavaFamiliesJavaFamilyCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DocUrl`<sup>Required</sup> <a name="DocUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.docUrl"></a>

```go
func DocUrl() *string
```

- *Type:* *string

---

##### `EndOfSupportLifeDate`<sup>Required</sup> <a name="EndOfSupportLifeDate" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.endOfSupportLifeDate"></a>

```go
func EndOfSupportLifeDate() *string
```

- *Type:* *string

---

##### `FamilyVersion`<sup>Required</sup> <a name="FamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.familyVersion"></a>

```go
func FamilyVersion() *string
```

- *Type:* *string

---

##### `IsSupportedVersion`<sup>Required</sup> <a name="IsSupportedVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.isSupportedVersion"></a>

```go
func IsSupportedVersion() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LatestReleaseArtifacts`<sup>Required</sup> <a name="LatestReleaseArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseArtifacts"></a>

```go
func LatestReleaseArtifacts() DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList</a>

---

##### `LatestReleaseVersion`<sup>Required</sup> <a name="LatestReleaseVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseVersion"></a>

```go
func LatestReleaseVersion() *string
```

- *Type:* *string

---

##### `ReleaseDate`<sup>Required</sup> <a name="ReleaseDate" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.releaseDate"></a>

```go
func ReleaseDate() *string
```

- *Type:* *string

---

##### `SupportType`<sup>Required</sup> <a name="SupportType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.supportType"></a>

```go
func SupportType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaFamiliesJavaFamilyCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems">DataOciJmsJavaFamiliesJavaFamilyCollectionItems</a>

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionList <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

dataocijmsjavafamilies.NewDataOciJmsJavaFamiliesJavaFamilyCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaFamiliesJavaFamilyCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavafamilies"

dataocijmsjavafamilies.NewDataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection">DataOciJmsJavaFamiliesJavaFamilyCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.items"></a>

```go
func Items() DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaFamiliesJavaFamilyCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection">DataOciJmsJavaFamiliesJavaFamilyCollection</a>

---



