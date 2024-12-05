# `dataOciCoreSecurityLists` Submodule <a name="`dataOciCoreSecurityLists` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreSecurityLists <a name="DataOciCoreSecurityLists" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists oci_core_security_lists}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityLists(scope: Construct, id: string, config: DataOciCoreSecurityListsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig">DataOciCoreSecurityListsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig">DataOciCoreSecurityListsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetVcnId">resetVcnId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreSecurityListsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetState"></a>

```typescript
public resetState(): void
```

##### `resetVcnId` <a name="resetVcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetVcnId"></a>

```typescript
public resetVcnId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreSecurityLists resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isConstruct"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

dataOciCoreSecurityLists.DataOciCoreSecurityLists.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformElement"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformDataSource"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreSecurityLists resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreSecurityLists to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreSecurityLists that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreSecurityLists to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList">DataOciCoreSecurityListsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.securityLists">securityLists</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList">DataOciCoreSecurityListsSecurityListsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.filter"></a>

```typescript
public readonly filter: DataOciCoreSecurityListsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList">DataOciCoreSecurityListsFilterList</a>

---

##### `securityLists`<sup>Required</sup> <a name="securityLists" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.securityLists"></a>

```typescript
public readonly securityLists: DataOciCoreSecurityListsSecurityListsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList">DataOciCoreSecurityListsSecurityListsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreSecurityListsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreSecurityListsConfig <a name="DataOciCoreSecurityListsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsConfig: dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#compartment_id DataOciCoreSecurityLists#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#display_name DataOciCoreSecurityLists#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#id DataOciCoreSecurityLists#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#state DataOciCoreSecurityLists#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#vcn_id DataOciCoreSecurityLists#vcn_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#compartment_id DataOciCoreSecurityLists#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#display_name DataOciCoreSecurityLists#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreSecurityListsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#filter DataOciCoreSecurityLists#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#id DataOciCoreSecurityLists#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#state DataOciCoreSecurityLists#state}.

---

##### `vcnId`<sup>Optional</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#vcn_id DataOciCoreSecurityLists#vcn_id}.

---

### DataOciCoreSecurityListsFilter <a name="DataOciCoreSecurityListsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsFilter: dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#name DataOciCoreSecurityLists#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#values DataOciCoreSecurityLists#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#regex DataOciCoreSecurityLists#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#name DataOciCoreSecurityLists#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#values DataOciCoreSecurityLists#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#regex DataOciCoreSecurityLists#regex}.

---

### DataOciCoreSecurityListsSecurityLists <a name="DataOciCoreSecurityListsSecurityLists" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityLists"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityLists.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsSecurityLists: dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityLists = { ... }
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRules <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsSecurityListsEgressSecurityRules: dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules = { ... }
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions: dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions = { ... }
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions: dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions = { ... }
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange: dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange = { ... }
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions: dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions = { ... }
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange: dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange = { ... }
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRules <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsSecurityListsIngressSecurityRules: dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules = { ... }
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions: dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions = { ... }
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions: dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions = { ... }
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange: dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange = { ... }
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions: dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions = { ... }
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange: dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreSecurityListsFilterList <a name="DataOciCoreSecurityListsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreSecurityListsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreSecurityListsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>[]

---


### DataOciCoreSecurityListsFilterOutputReference <a name="DataOciCoreSecurityListsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreSecurityListsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter">DataOciCoreSecurityListsFilter</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.get"></a>

```typescript
public get(index: number): DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.stateless">stateless</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules">DataOciCoreSecurityListsSecurityListsEgressSecurityRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.icmpOptions"></a>

```typescript
public readonly icmpOptions: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.stateless"></a>

```typescript
public readonly stateless: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.tcpOptions"></a>

```typescript
public readonly tcpOptions: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.udpOptions"></a>

```typescript
public readonly udpOptions: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreSecurityListsSecurityListsEgressSecurityRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules">DataOciCoreSecurityListsSecurityListsEgressSecurityRules</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.get"></a>

```typescript
public get(index: number): DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.get"></a>

```typescript
public get(index: number): DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.get"></a>

```typescript
public get(index: number): DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.stateless">stateless</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules">DataOciCoreSecurityListsSecurityListsIngressSecurityRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.icmpOptions"></a>

```typescript
public readonly icmpOptions: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.stateless"></a>

```typescript
public readonly stateless: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.tcpOptions"></a>

```typescript
public readonly tcpOptions: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.udpOptions"></a>

```typescript
public readonly udpOptions: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreSecurityListsSecurityListsIngressSecurityRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules">DataOciCoreSecurityListsSecurityListsIngressSecurityRules</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.get"></a>

```typescript
public get(index: number): DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.get"></a>

```typescript
public get(index: number): DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange</a>

---


### DataOciCoreSecurityListsSecurityListsList <a name="DataOciCoreSecurityListsSecurityListsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.get"></a>

```typescript
public get(index: number): DataOciCoreSecurityListsSecurityListsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreSecurityListsSecurityListsOutputReference <a name="DataOciCoreSecurityListsSecurityListsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreSecurityLists } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.egressSecurityRules">egressSecurityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.ingressSecurityRules">ingressSecurityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityLists">DataOciCoreSecurityListsSecurityLists</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `egressSecurityRules`<sup>Required</sup> <a name="egressSecurityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.egressSecurityRules"></a>

```typescript
public readonly egressSecurityRules: DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingressSecurityRules`<sup>Required</sup> <a name="ingressSecurityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.ingressSecurityRules"></a>

```typescript
public readonly ingressSecurityRules: DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreSecurityListsSecurityLists;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityLists">DataOciCoreSecurityListsSecurityLists</a>

---



