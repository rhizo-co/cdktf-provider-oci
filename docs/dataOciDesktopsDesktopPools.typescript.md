# `dataOciDesktopsDesktopPools` Submodule <a name="`dataOciDesktopsDesktopPools` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDesktopsDesktopPools <a name="DataOciDesktopsDesktopPools" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools oci_desktops_desktop_pools}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools(scope: Construct, id: string, config: DataOciDesktopsDesktopPoolsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig">DataOciDesktopsDesktopPoolsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig">DataOciDesktopsDesktopPoolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDesktopsDesktopPoolsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDesktopsDesktopPools resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isConstruct"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformElement"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformDataSource"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDesktopsDesktopPools resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDesktopsDesktopPools to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDesktopsDesktopPools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDesktopsDesktopPools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.desktopPoolCollection">desktopPoolCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList">DataOciDesktopsDesktopPoolsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `desktopPoolCollection`<sup>Required</sup> <a name="desktopPoolCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.desktopPoolCollection"></a>

```typescript
public readonly desktopPoolCollection: DataOciDesktopsDesktopPoolsDesktopPoolCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filter"></a>

```typescript
public readonly filter: DataOciDesktopsDesktopPoolsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList">DataOciDesktopsDesktopPoolsFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDesktopsDesktopPoolsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDesktopsDesktopPoolsConfig <a name="DataOciDesktopsDesktopPoolsConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsConfig: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#compartment_id DataOciDesktopsDesktopPools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#availability_domain DataOciDesktopsDesktopPools#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#display_name DataOciDesktopsDesktopPools#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#id DataOciDesktopsDesktopPools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#state DataOciDesktopsDesktopPools#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#compartment_id DataOciDesktopsDesktopPools#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#availability_domain DataOciDesktopsDesktopPools#availability_domain}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#display_name DataOciDesktopsDesktopPools#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDesktopsDesktopPoolsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#filter DataOciDesktopsDesktopPools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#id DataOciDesktopsDesktopPools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#state DataOciDesktopsDesktopPools#state}.

---

### DataOciDesktopsDesktopPoolsDesktopPoolCollection <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsDesktopPoolCollection: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection = { ... }
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsDesktopPoolCollectionItems: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems = { ... }
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy = { ... }
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule = { ... }
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule = { ... }
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy = { ... }
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage = { ... }
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration = { ... }
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails = { ... }
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions = { ... }
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect = { ... }
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity = { ... }
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig = { ... }
```


### DataOciDesktopsDesktopPoolsFilter <a name="DataOciDesktopsDesktopPoolsFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolsFilter: dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#name DataOciDesktopsDesktopPools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#values DataOciDesktopsDesktopPools#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#regex DataOciDesktopsDesktopPools#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#name DataOciDesktopsDesktopPools#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#values DataOciDesktopsDesktopPools#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#regex DataOciDesktopsDesktopPools#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.startSchedule">startSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.stopSchedule">stopSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startSchedule`<sup>Required</sup> <a name="startSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.startSchedule"></a>

```typescript
public readonly startSchedule: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList</a>

---

##### `stopSchedule`<sup>Required</sup> <a name="stopSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.stopSchedule"></a>

```typescript
public readonly stopSchedule: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.audioMode">audioMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.cdmMode">cdmMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.clipboardMode">clipboardMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isDisplayEnabled">isDisplayEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isKeyboardEnabled">isKeyboardEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPointerEnabled">isPointerEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPrintingEnabled">isPrintingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioMode`<sup>Required</sup> <a name="audioMode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.audioMode"></a>

```typescript
public readonly audioMode: string;
```

- *Type:* string

---

##### `cdmMode`<sup>Required</sup> <a name="cdmMode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.cdmMode"></a>

```typescript
public readonly cdmMode: string;
```

- *Type:* string

---

##### `clipboardMode`<sup>Required</sup> <a name="clipboardMode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.clipboardMode"></a>

```typescript
public readonly clipboardMode: string;
```

- *Type:* string

---

##### `isDisplayEnabled`<sup>Required</sup> <a name="isDisplayEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isDisplayEnabled"></a>

```typescript
public readonly isDisplayEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isKeyboardEnabled`<sup>Required</sup> <a name="isKeyboardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isKeyboardEnabled"></a>

```typescript
public readonly isKeyboardEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPointerEnabled`<sup>Required</sup> <a name="isPointerEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPointerEnabled"></a>

```typescript
public readonly isPointerEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPrintingEnabled`<sup>Required</sup> <a name="isPrintingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPrintingEnabled"></a>

```typescript
public readonly isPrintingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.activeDesktops">activeDesktops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.arePrivilegedUsers">arePrivilegedUsers</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityPolicy">availabilityPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.contactDetails">contactDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.devicePolicy">devicePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.image">image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.isStorageEnabled">isStorageEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.maximumSize">maximumSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.privateAccessDetails">privateAccessDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.sessionLifecycleActions">sessionLifecycleActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.standbySize">standbySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageBackupPolicyId">storageBackupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageSizeInGbs">storageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStartScheduled">timeStartScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStopScheduled">timeStopScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.useDedicatedVmHost">useDedicatedVmHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDesktops`<sup>Required</sup> <a name="activeDesktops" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.activeDesktops"></a>

```typescript
public readonly activeDesktops: number;
```

- *Type:* number

---

##### `arePrivilegedUsers`<sup>Required</sup> <a name="arePrivilegedUsers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.arePrivilegedUsers"></a>

```typescript
public readonly arePrivilegedUsers: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `availabilityPolicy`<sup>Required</sup> <a name="availabilityPolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityPolicy"></a>

```typescript
public readonly availabilityPolicy: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `contactDetails`<sup>Required</sup> <a name="contactDetails" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.contactDetails"></a>

```typescript
public readonly contactDetails: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `devicePolicy`<sup>Required</sup> <a name="devicePolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.devicePolicy"></a>

```typescript
public readonly devicePolicy: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.image"></a>

```typescript
public readonly image: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList</a>

---

##### `isStorageEnabled`<sup>Required</sup> <a name="isStorageEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.isStorageEnabled"></a>

```typescript
public readonly isStorageEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maximumSize`<sup>Required</sup> <a name="maximumSize" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.maximumSize"></a>

```typescript
public readonly maximumSize: number;
```

- *Type:* number

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList</a>

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateAccessDetails`<sup>Required</sup> <a name="privateAccessDetails" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.privateAccessDetails"></a>

```typescript
public readonly privateAccessDetails: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList</a>

---

##### `sessionLifecycleActions`<sup>Required</sup> <a name="sessionLifecycleActions" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.sessionLifecycleActions"></a>

```typescript
public readonly sessionLifecycleActions: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList</a>

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeConfig"></a>

```typescript
public readonly shapeConfig: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList</a>

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `standbySize`<sup>Required</sup> <a name="standbySize" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.standbySize"></a>

```typescript
public readonly standbySize: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageBackupPolicyId`<sup>Required</sup> <a name="storageBackupPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageBackupPolicyId"></a>

```typescript
public readonly storageBackupPolicyId: string;
```

- *Type:* string

---

##### `storageSizeInGbs`<sup>Required</sup> <a name="storageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageSizeInGbs"></a>

```typescript
public readonly storageSizeInGbs: number;
```

- *Type:* number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeStartScheduled`<sup>Required</sup> <a name="timeStartScheduled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStartScheduled"></a>

```typescript
public readonly timeStartScheduled: string;
```

- *Type:* string

---

##### `timeStopScheduled`<sup>Required</sup> <a name="timeStopScheduled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStopScheduled"></a>

```typescript
public readonly timeStopScheduled: string;
```

- *Type:* string

---

##### `useDedicatedVmHost`<sup>Required</sup> <a name="useDedicatedVmHost" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.useDedicatedVmHost"></a>

```typescript
public readonly useDedicatedVmHost: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.endpointFqdn">endpointFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointFqdn`<sup>Required</sup> <a name="endpointFqdn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.endpointFqdn"></a>

```typescript
public readonly endpointFqdn: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes">gracePeriodInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `gracePeriodInMinutes`<sup>Required</sup> <a name="gracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes"></a>

```typescript
public readonly gracePeriodInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes">gracePeriodInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `gracePeriodInMinutes`<sup>Required</sup> <a name="gracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes"></a>

```typescript
public readonly gracePeriodInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.disconnect">disconnect</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.inactivity">inactivity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disconnect`<sup>Required</sup> <a name="disconnect" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.disconnect"></a>

```typescript
public readonly disconnect: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList</a>

---

##### `inactivity`<sup>Required</sup> <a name="inactivity" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.inactivity"></a>

```typescript
public readonly inactivity: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.baselineOcpuUtilization">baselineOcpuUtilization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baselineOcpuUtilization`<sup>Required</sup> <a name="baselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```typescript
public readonly baselineOcpuUtilization: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: string;
```

- *Type:* string

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection">DataOciDesktopsDesktopPoolsDesktopPoolCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolsDesktopPoolCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection">DataOciDesktopsDesktopPoolsDesktopPoolCollection</a>

---


### DataOciDesktopsDesktopPoolsFilterList <a name="DataOciDesktopsDesktopPoolsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDesktopsDesktopPoolsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>[]

---


### DataOciDesktopsDesktopPoolsFilterOutputReference <a name="DataOciDesktopsDesktopPoolsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPools } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDesktopsDesktopPoolsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>

---



