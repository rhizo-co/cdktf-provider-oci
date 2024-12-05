# `dataOciJmsJavaFamily` Submodule <a name="`dataOciJmsJavaFamily` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaFamily <a name="DataOciJmsJavaFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family oci_jms_java_family}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer"></a>

```typescript
import { dataOciJmsJavaFamily } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaFamily.DataOciJmsJavaFamily(scope: Construct, id: string, config: DataOciJmsJavaFamilyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig">DataOciJmsJavaFamilyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig">DataOciJmsJavaFamilyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsJavaFamily resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isConstruct"></a>

```typescript
import { dataOciJmsJavaFamily } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJavaFamily.DataOciJmsJavaFamily.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isTerraformElement"></a>

```typescript
import { dataOciJmsJavaFamily } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJavaFamily.DataOciJmsJavaFamily.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isTerraformDataSource"></a>

```typescript
import { dataOciJmsJavaFamily } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJavaFamily.DataOciJmsJavaFamily.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.generateConfigForImport"></a>

```typescript
import { dataOciJmsJavaFamily } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJavaFamily.DataOciJmsJavaFamily.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciJmsJavaFamily resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsJavaFamily to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsJavaFamily that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaFamily to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.docUrl">docUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.endOfSupportLifeDate">endOfSupportLifeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.isSupportedVersion">isSupportedVersion</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.latestReleaseArtifacts">latestReleaseArtifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList">DataOciJmsJavaFamilyLatestReleaseArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.latestReleaseVersion">latestReleaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.releaseDate">releaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.supportType">supportType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.familyVersionInput">familyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.familyVersion">familyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `docUrl`<sup>Required</sup> <a name="docUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.docUrl"></a>

```typescript
public readonly docUrl: string;
```

- *Type:* string

---

##### `endOfSupportLifeDate`<sup>Required</sup> <a name="endOfSupportLifeDate" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.endOfSupportLifeDate"></a>

```typescript
public readonly endOfSupportLifeDate: string;
```

- *Type:* string

---

##### `isSupportedVersion`<sup>Required</sup> <a name="isSupportedVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.isSupportedVersion"></a>

```typescript
public readonly isSupportedVersion: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `latestReleaseArtifacts`<sup>Required</sup> <a name="latestReleaseArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.latestReleaseArtifacts"></a>

```typescript
public readonly latestReleaseArtifacts: DataOciJmsJavaFamilyLatestReleaseArtifactsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList">DataOciJmsJavaFamilyLatestReleaseArtifactsList</a>

---

##### `latestReleaseVersion`<sup>Required</sup> <a name="latestReleaseVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.latestReleaseVersion"></a>

```typescript
public readonly latestReleaseVersion: string;
```

- *Type:* string

---

##### `releaseDate`<sup>Required</sup> <a name="releaseDate" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.releaseDate"></a>

```typescript
public readonly releaseDate: string;
```

- *Type:* string

---

##### `supportType`<sup>Required</sup> <a name="supportType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.supportType"></a>

```typescript
public readonly supportType: string;
```

- *Type:* string

---

##### `familyVersionInput`<sup>Optional</sup> <a name="familyVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.familyVersionInput"></a>

```typescript
public readonly familyVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `familyVersion`<sup>Required</sup> <a name="familyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.familyVersion"></a>

```typescript
public readonly familyVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaFamilyConfig <a name="DataOciJmsJavaFamilyConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.Initializer"></a>

```typescript
import { dataOciJmsJavaFamily } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJavaFamilyConfig: dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.familyVersion">familyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family#family_version DataOciJmsJavaFamily#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family#id DataOciJmsJavaFamily#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `familyVersion`<sup>Required</sup> <a name="familyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.familyVersion"></a>

```typescript
public readonly familyVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family#family_version DataOciJmsJavaFamily#family_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family#id DataOciJmsJavaFamily#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciJmsJavaFamilyLatestReleaseArtifacts <a name="DataOciJmsJavaFamilyLatestReleaseArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifacts.Initializer"></a>

```typescript
import { dataOciJmsJavaFamily } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJavaFamilyLatestReleaseArtifacts: dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifacts = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaFamilyLatestReleaseArtifactsList <a name="DataOciJmsJavaFamilyLatestReleaseArtifactsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.Initializer"></a>

```typescript
import { dataOciJmsJavaFamily } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.get"></a>

```typescript
public get(index: number): DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference <a name="DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer"></a>

```typescript
import { dataOciJmsJavaFamily } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes">approximateFileSizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactContentType">artifactContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactDescription">artifactDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactFileName">artifactFileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.downloadUrl">downloadUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.packageType">packageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.packageTypeDetail">packageTypeDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl">scriptChecksumUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl">scriptDownloadUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.sha256">sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifacts">DataOciJmsJavaFamilyLatestReleaseArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approximateFileSizeInBytes`<sup>Required</sup> <a name="approximateFileSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes"></a>

```typescript
public readonly approximateFileSizeInBytes: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `artifactContentType`<sup>Required</sup> <a name="artifactContentType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactContentType"></a>

```typescript
public readonly artifactContentType: string;
```

- *Type:* string

---

##### `artifactDescription`<sup>Required</sup> <a name="artifactDescription" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactDescription"></a>

```typescript
public readonly artifactDescription: string;
```

- *Type:* string

---

##### `artifactFileName`<sup>Required</sup> <a name="artifactFileName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactFileName"></a>

```typescript
public readonly artifactFileName: string;
```

- *Type:* string

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `downloadUrl`<sup>Required</sup> <a name="downloadUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.downloadUrl"></a>

```typescript
public readonly downloadUrl: string;
```

- *Type:* string

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.packageType"></a>

```typescript
public readonly packageType: string;
```

- *Type:* string

---

##### `packageTypeDetail`<sup>Required</sup> <a name="packageTypeDetail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.packageTypeDetail"></a>

```typescript
public readonly packageTypeDetail: string;
```

- *Type:* string

---

##### `scriptChecksumUrl`<sup>Required</sup> <a name="scriptChecksumUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl"></a>

```typescript
public readonly scriptChecksumUrl: string;
```

- *Type:* string

---

##### `scriptDownloadUrl`<sup>Required</sup> <a name="scriptDownloadUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl"></a>

```typescript
public readonly scriptDownloadUrl: string;
```

- *Type:* string

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsJavaFamilyLatestReleaseArtifacts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifacts">DataOciJmsJavaFamilyLatestReleaseArtifacts</a>

---



