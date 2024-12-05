# `dataOciOptimizerProfiles` Submodule <a name="`dataOciOptimizerProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOptimizerProfiles <a name="DataOciOptimizerProfiles" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles oci_optimizer_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfiles(scope: Construct, id: string, config: DataOciOptimizerProfilesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig">DataOciOptimizerProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig">DataOciOptimizerProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOptimizerProfilesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter">DataOciOptimizerProfilesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOptimizerProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.isConstruct"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciOptimizerProfiles.DataOciOptimizerProfiles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.isTerraformElement"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciOptimizerProfiles.DataOciOptimizerProfiles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.isTerraformDataSource"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciOptimizerProfiles.DataOciOptimizerProfiles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.generateConfigForImport"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciOptimizerProfiles.DataOciOptimizerProfiles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOptimizerProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOptimizerProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOptimizerProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOptimizerProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList">DataOciOptimizerProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.profileCollection">profileCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList">DataOciOptimizerProfilesProfileCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter">DataOciOptimizerProfilesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.filter"></a>

```typescript
public readonly filter: DataOciOptimizerProfilesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList">DataOciOptimizerProfilesFilterList</a>

---

##### `profileCollection`<sup>Required</sup> <a name="profileCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.profileCollection"></a>

```typescript
public readonly profileCollection: DataOciOptimizerProfilesProfileCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList">DataOciOptimizerProfilesProfileCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOptimizerProfilesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter">DataOciOptimizerProfilesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfiles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOptimizerProfilesConfig <a name="DataOciOptimizerProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerProfilesConfig: dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#compartment_id DataOciOptimizerProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter">DataOciOptimizerProfilesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#id DataOciOptimizerProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#name DataOciOptimizerProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#state DataOciOptimizerProfiles#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#compartment_id DataOciOptimizerProfiles#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOptimizerProfilesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter">DataOciOptimizerProfilesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#filter DataOciOptimizerProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#id DataOciOptimizerProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#name DataOciOptimizerProfiles#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#state DataOciOptimizerProfiles#state}.

---

### DataOciOptimizerProfilesFilter <a name="DataOciOptimizerProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerProfilesFilter: dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#name DataOciOptimizerProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#values DataOciOptimizerProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#regex DataOciOptimizerProfiles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#name DataOciOptimizerProfiles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#values DataOciOptimizerProfiles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_profiles#regex DataOciOptimizerProfiles#regex}.

---

### DataOciOptimizerProfilesProfileCollection <a name="DataOciOptimizerProfilesProfileCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollection.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerProfilesProfileCollection: dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollection = { ... }
```


### DataOciOptimizerProfilesProfileCollectionItems <a name="DataOciOptimizerProfilesProfileCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItems.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerProfilesProfileCollectionItems: dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItems = { ... }
```


### DataOciOptimizerProfilesProfileCollectionItemsLevelsConfiguration <a name="DataOciOptimizerProfilesProfileCollectionItemsLevelsConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfiguration.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerProfilesProfileCollectionItemsLevelsConfiguration: dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfiguration = { ... }
```


### DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItems <a name="DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItems.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItems: dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItems = { ... }
```


### DataOciOptimizerProfilesProfileCollectionItemsTargetCompartments <a name="DataOciOptimizerProfilesProfileCollectionItemsTargetCompartments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartments.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerProfilesProfileCollectionItemsTargetCompartments: dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartments = { ... }
```


### DataOciOptimizerProfilesProfileCollectionItemsTargetTags <a name="DataOciOptimizerProfilesProfileCollectionItemsTargetTags" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTags.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerProfilesProfileCollectionItemsTargetTags: dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTags = { ... }
```


### DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItems <a name="DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItems.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerProfilesProfileCollectionItemsTargetTagsItems: dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOptimizerProfilesFilterList <a name="DataOciOptimizerProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.get"></a>

```typescript
public get(index: number): DataOciOptimizerProfilesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter">DataOciOptimizerProfilesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOptimizerProfilesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter">DataOciOptimizerProfilesFilter</a>[]

---


### DataOciOptimizerProfilesFilterOutputReference <a name="DataOciOptimizerProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter">DataOciOptimizerProfilesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOptimizerProfilesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesFilter">DataOciOptimizerProfilesFilter</a>

---


### DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList <a name="DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.get"></a>

```typescript
public get(index: number): DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference <a name="DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.property.recommendationId">recommendationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItems">DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `recommendationId`<sup>Required</sup> <a name="recommendationId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.property.recommendationId"></a>

```typescript
public readonly recommendationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItems">DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItems</a>

---


### DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList <a name="DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.get"></a>

```typescript
public get(index: number): DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference <a name="DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList">DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfiguration">DataOciOptimizerProfilesProfileCollectionItemsLevelsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList">DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerProfilesProfileCollectionItemsLevelsConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfiguration">DataOciOptimizerProfilesProfileCollectionItemsLevelsConfiguration</a>

---


### DataOciOptimizerProfilesProfileCollectionItemsList <a name="DataOciOptimizerProfilesProfileCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOptimizerProfilesProfileCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerProfilesProfileCollectionItemsOutputReference <a name="DataOciOptimizerProfilesProfileCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.aggregationIntervalInDays">aggregationIntervalInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.levelsConfiguration">levelsConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList">DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.targetCompartments">targetCompartments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList">DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.targetTags">targetTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList">DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItems">DataOciOptimizerProfilesProfileCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationIntervalInDays`<sup>Required</sup> <a name="aggregationIntervalInDays" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.aggregationIntervalInDays"></a>

```typescript
public readonly aggregationIntervalInDays: number;
```

- *Type:* number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `levelsConfiguration`<sup>Required</sup> <a name="levelsConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.levelsConfiguration"></a>

```typescript
public readonly levelsConfiguration: DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList">DataOciOptimizerProfilesProfileCollectionItemsLevelsConfigurationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetCompartments`<sup>Required</sup> <a name="targetCompartments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.targetCompartments"></a>

```typescript
public readonly targetCompartments: DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList">DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList</a>

---

##### `targetTags`<sup>Required</sup> <a name="targetTags" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.targetTags"></a>

```typescript
public readonly targetTags: DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList">DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerProfilesProfileCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItems">DataOciOptimizerProfilesProfileCollectionItems</a>

---


### DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList <a name="DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.get"></a>

```typescript
public get(index: number): DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference <a name="DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.property.items">items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartments">DataOciOptimizerProfilesProfileCollectionItemsTargetCompartments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerProfilesProfileCollectionItemsTargetCompartments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetCompartments">DataOciOptimizerProfilesProfileCollectionItemsTargetCompartments</a>

---


### DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList <a name="DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.get"></a>

```typescript
public get(index: number): DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference <a name="DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.property.tagDefinitionName">tagDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.property.tagNamespaceName">tagNamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.property.tagValues">tagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.property.tagValueType">tagValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItems">DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagDefinitionName`<sup>Required</sup> <a name="tagDefinitionName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.property.tagDefinitionName"></a>

```typescript
public readonly tagDefinitionName: string;
```

- *Type:* string

---

##### `tagNamespaceName`<sup>Required</sup> <a name="tagNamespaceName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.property.tagNamespaceName"></a>

```typescript
public readonly tagNamespaceName: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

---

##### `tagValueType`<sup>Required</sup> <a name="tagValueType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.property.tagValueType"></a>

```typescript
public readonly tagValueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItems">DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItems</a>

---


### DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList <a name="DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.get"></a>

```typescript
public get(index: number): DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference <a name="DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList">DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTags">DataOciOptimizerProfilesProfileCollectionItemsTargetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList">DataOciOptimizerProfilesProfileCollectionItemsTargetTagsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerProfilesProfileCollectionItemsTargetTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsTargetTags">DataOciOptimizerProfilesProfileCollectionItemsTargetTags</a>

---


### DataOciOptimizerProfilesProfileCollectionList <a name="DataOciOptimizerProfilesProfileCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.get"></a>

```typescript
public get(index: number): DataOciOptimizerProfilesProfileCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerProfilesProfileCollectionOutputReference <a name="DataOciOptimizerProfilesProfileCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList">DataOciOptimizerProfilesProfileCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollection">DataOciOptimizerProfilesProfileCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOptimizerProfilesProfileCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionItemsList">DataOciOptimizerProfilesProfileCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerProfilesProfileCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerProfiles.DataOciOptimizerProfilesProfileCollection">DataOciOptimizerProfilesProfileCollection</a>

---



