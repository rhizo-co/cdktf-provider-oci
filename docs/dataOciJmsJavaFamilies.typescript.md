# `dataOciJmsJavaFamilies` Submodule <a name="`dataOciJmsJavaFamilies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaFamilies <a name="DataOciJmsJavaFamilies" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families oci_jms_java_families}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaFamilies.DataOciJmsJavaFamilies(scope: Construct, id: string, config?: DataOciJmsJavaFamiliesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig">DataOciJmsJavaFamiliesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig">DataOciJmsJavaFamiliesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFamilyVersion">resetFamilyVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetIsSupportedVersion">resetIsSupportedVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciJmsJavaFamiliesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFamilyVersion` <a name="resetFamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFamilyVersion"></a>

```typescript
public resetFamilyVersion(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsSupportedVersion` <a name="resetIsSupportedVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetIsSupportedVersion"></a>

```typescript
public resetIsSupportedVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsJavaFamilies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isConstruct"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformElement"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformDataSource"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciJmsJavaFamilies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsJavaFamilies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsJavaFamilies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaFamilies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList">DataOciJmsJavaFamiliesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.javaFamilyCollection">javaFamilyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList">DataOciJmsJavaFamiliesJavaFamilyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersionInput">familyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersionInput">isSupportedVersionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersion">familyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersion">isSupportedVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filter"></a>

```typescript
public readonly filter: DataOciJmsJavaFamiliesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList">DataOciJmsJavaFamiliesFilterList</a>

---

##### `javaFamilyCollection`<sup>Required</sup> <a name="javaFamilyCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.javaFamilyCollection"></a>

```typescript
public readonly javaFamilyCollection: DataOciJmsJavaFamiliesJavaFamilyCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList">DataOciJmsJavaFamiliesJavaFamilyCollectionList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `familyVersionInput`<sup>Optional</sup> <a name="familyVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersionInput"></a>

```typescript
public readonly familyVersionInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciJmsJavaFamiliesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isSupportedVersionInput`<sup>Optional</sup> <a name="isSupportedVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersionInput"></a>

```typescript
public readonly isSupportedVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `familyVersion`<sup>Required</sup> <a name="familyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersion"></a>

```typescript
public readonly familyVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isSupportedVersion`<sup>Required</sup> <a name="isSupportedVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersion"></a>

```typescript
public readonly isSupportedVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaFamiliesConfig <a name="DataOciJmsJavaFamiliesConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.Initializer"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJavaFamiliesConfig: dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#display_name DataOciJmsJavaFamilies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.familyVersion">familyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#family_version DataOciJmsJavaFamilies#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#id DataOciJmsJavaFamilies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.isSupportedVersion">isSupportedVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#is_supported_version DataOciJmsJavaFamilies#is_supported_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#display_name DataOciJmsJavaFamilies#display_name}.

---

##### `familyVersion`<sup>Optional</sup> <a name="familyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.familyVersion"></a>

```typescript
public readonly familyVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#family_version DataOciJmsJavaFamilies#family_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciJmsJavaFamiliesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#filter DataOciJmsJavaFamilies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#id DataOciJmsJavaFamilies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isSupportedVersion`<sup>Optional</sup> <a name="isSupportedVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.isSupportedVersion"></a>

```typescript
public readonly isSupportedVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#is_supported_version DataOciJmsJavaFamilies#is_supported_version}.

---

### DataOciJmsJavaFamiliesFilter <a name="DataOciJmsJavaFamiliesFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.Initializer"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJavaFamiliesFilter: dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#name DataOciJmsJavaFamilies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#values DataOciJmsJavaFamilies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#regex DataOciJmsJavaFamilies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#name DataOciJmsJavaFamilies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#values DataOciJmsJavaFamilies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#regex DataOciJmsJavaFamilies#regex}.

---

### DataOciJmsJavaFamiliesJavaFamilyCollection <a name="DataOciJmsJavaFamiliesJavaFamilyCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection.Initializer"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJavaFamiliesJavaFamilyCollection: dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection = { ... }
```


### DataOciJmsJavaFamiliesJavaFamilyCollectionItems <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems.Initializer"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJavaFamiliesJavaFamilyCollectionItems: dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems = { ... }
```


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts.Initializer"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts: dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaFamiliesFilterList <a name="DataOciJmsJavaFamiliesFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.get"></a>

```typescript
public get(index: number): DataOciJmsJavaFamiliesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciJmsJavaFamiliesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>[]

---


### DataOciJmsJavaFamiliesFilterOutputReference <a name="DataOciJmsJavaFamiliesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciJmsJavaFamiliesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter">DataOciJmsJavaFamiliesFilter</a>

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.get"></a>

```typescript
public get(index: number): DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes">approximateFileSizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactContentType">artifactContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactDescription">artifactDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactFileName">artifactFileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.downloadUrl">downloadUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageType">packageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageTypeDetail">packageTypeDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl">scriptChecksumUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl">scriptDownloadUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.sha256">sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approximateFileSizeInBytes`<sup>Required</sup> <a name="approximateFileSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes"></a>

```typescript
public readonly approximateFileSizeInBytes: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `artifactContentType`<sup>Required</sup> <a name="artifactContentType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactContentType"></a>

```typescript
public readonly artifactContentType: string;
```

- *Type:* string

---

##### `artifactDescription`<sup>Required</sup> <a name="artifactDescription" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactDescription"></a>

```typescript
public readonly artifactDescription: string;
```

- *Type:* string

---

##### `artifactFileName`<sup>Required</sup> <a name="artifactFileName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactFileName"></a>

```typescript
public readonly artifactFileName: string;
```

- *Type:* string

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `downloadUrl`<sup>Required</sup> <a name="downloadUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.downloadUrl"></a>

```typescript
public readonly downloadUrl: string;
```

- *Type:* string

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageType"></a>

```typescript
public readonly packageType: string;
```

- *Type:* string

---

##### `packageTypeDetail`<sup>Required</sup> <a name="packageTypeDetail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageTypeDetail"></a>

```typescript
public readonly packageTypeDetail: string;
```

- *Type:* string

---

##### `scriptChecksumUrl`<sup>Required</sup> <a name="scriptChecksumUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl"></a>

```typescript
public readonly scriptChecksumUrl: string;
```

- *Type:* string

---

##### `scriptDownloadUrl`<sup>Required</sup> <a name="scriptDownloadUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl"></a>

```typescript
public readonly scriptDownloadUrl: string;
```

- *Type:* string

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts</a>

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.docUrl">docUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.endOfSupportLifeDate">endOfSupportLifeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.familyVersion">familyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.isSupportedVersion">isSupportedVersion</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseArtifacts">latestReleaseArtifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseVersion">latestReleaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.releaseDate">releaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.supportType">supportType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems">DataOciJmsJavaFamiliesJavaFamilyCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `docUrl`<sup>Required</sup> <a name="docUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.docUrl"></a>

```typescript
public readonly docUrl: string;
```

- *Type:* string

---

##### `endOfSupportLifeDate`<sup>Required</sup> <a name="endOfSupportLifeDate" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.endOfSupportLifeDate"></a>

```typescript
public readonly endOfSupportLifeDate: string;
```

- *Type:* string

---

##### `familyVersion`<sup>Required</sup> <a name="familyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.familyVersion"></a>

```typescript
public readonly familyVersion: string;
```

- *Type:* string

---

##### `isSupportedVersion`<sup>Required</sup> <a name="isSupportedVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.isSupportedVersion"></a>

```typescript
public readonly isSupportedVersion: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `latestReleaseArtifacts`<sup>Required</sup> <a name="latestReleaseArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseArtifacts"></a>

```typescript
public readonly latestReleaseArtifacts: DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList</a>

---

##### `latestReleaseVersion`<sup>Required</sup> <a name="latestReleaseVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseVersion"></a>

```typescript
public readonly latestReleaseVersion: string;
```

- *Type:* string

---

##### `releaseDate`<sup>Required</sup> <a name="releaseDate" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.releaseDate"></a>

```typescript
public readonly releaseDate: string;
```

- *Type:* string

---

##### `supportType`<sup>Required</sup> <a name="supportType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.supportType"></a>

```typescript
public readonly supportType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsJavaFamiliesJavaFamilyCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems">DataOciJmsJavaFamiliesJavaFamilyCollectionItems</a>

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionList <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.get"></a>

```typescript
public get(index: number): DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciJmsJavaFamilies } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection">DataOciJmsJavaFamiliesJavaFamilyCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsJavaFamiliesJavaFamilyCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection">DataOciJmsJavaFamiliesJavaFamilyCollection</a>

---



